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
  const vevents = Object.values(events).filter((event) => event.type === 'VEVENT');

  const bookings = vevents
    .filter((event) => event.start && event.end)
    .map((event) => {
      if (event.rrule) {
        // Some bookings on this calendar got saved as a daily-repeating
        // all-day series (FREQ=DAILY;UNTIL=...) instead of one spanning
        // event — each occurrence is its own booked day, so the real
        // range is first occurrence through last occurrence, inclusive.
        const occurrences = event.rrule.all((date, i) => i < 366);
        const start = occurrences[0];
        const end = occurrences[occurrences.length - 1];
        return { start: toISODate(start), end: toISODate(end) };
      }

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

  console.error(`Parsed ${vevents.length} calendar event(s) into ${bookings.length} booking range(s).`);

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
