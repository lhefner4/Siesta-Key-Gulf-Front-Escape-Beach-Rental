import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

// NOTE: this project uses react-day-picker v9, whose classNames keys are
// flat UI/modifier names (weekdays, weekday, selected, outside, range_start,
// ...) rather than v8's prefixed keys (head_row, day_selected, day_outside,
// ...). Keep new keys aligned with v9's UI/DayFlag/SelectionState enums.
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  hideWeekdays = false,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      hideWeekdays={hideWeekdays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] flex-1",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-sm flex-1 flex justify-center focus-within:relative focus-within:z-20 [&:has([data-selected=true])]:bg-accent [&:has([data-outside=true][data-selected=true])]:bg-accent/50"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        range_start: "rounded-l-md",
        range_end: "rounded-r-md",
        selected:
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground [&>button]:focus:bg-primary [&>button]:focus:text-primary-foreground rounded-md",
        today: "[&>button]:bg-accent [&>button]:text-accent-foreground",
        outside: "text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle: "[&>button]:bg-accent [&>button]:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClassName, ...chevronProps }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("h-4 w-4", chevronClassName)} {...chevronProps} />
          ) : (
            <ChevronRight className={cn("h-4 w-4", chevronClassName)} {...chevronProps} />
          ),
      }}
      {...props} />
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
