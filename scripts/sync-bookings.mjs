import ical from 'node-ical';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const ICS_URL = process.env.GCAL_ICS_URL;
if (!ICS_URL) {
  console.error('GCAL_ICS_URL environment variable is not set.');
  process.exit(1);
}

const toISODate = (date) => date.toISOString().slice(0, 10);

const run = async () => {
  const events = await ical.async.fromURL(ICS_URL);
  const all = Object.values(events);
  const vevents = all.filter((event) => event.type === 'VEVENT');

  console.error(`DEBUG: ${all.length} calendar component(s), ${vevents.length} VEVENT(s)`);
  vevents.forEach((event, i) => {
    console.error(
      `DEBUG [${i}] allDay=${event.start?.dateOnly === true}` +
      ` recurring=${!!event.rrule}` +
      ` status=${event.status || ''}` +
      ` start=${event.start?.toISOString?.()}` +
      ` end=${event.end?.toISOString?.()}`
    );
  });

  const bookings = vevents
    .filter((event) => event.start && event.end)
    .map((event) => {
      const isAllDay = event.start.dateOnly === true;
      const start = new Date(event.start);
      const end = new Date(event.end);
      if (isAllDay) {
        // Google Calendar's all-day DTEND is exclusive (the day after the
        // last booked night) — pull it back one day to make "end" inclusive,
        // matching how AvailabilityCalendar.jsx reads bookedDates.
        end.setUTCDate(end.getUTCDate() - 1);
      }
      return { start: toISODate(start), end: toISODate(end) };
    })
    .sort((a, b) => a.start.localeCompare(b.start));

  const outPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../frontend/src/bookedDates.json'
  );
  writeFileSync(outPath, JSON.stringify(bookings, null, 2) + '\n');
  console.log(`Wrote ${bookings.length} booking(s) to ${outPath}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
