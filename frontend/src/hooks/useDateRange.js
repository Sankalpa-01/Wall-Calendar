import { useState } from "react";
import { isBefore, isSameDay } from "date-fns";

export const useDateRange = () => {
  const [range, setRange] = useState({
    from: null,
    to: null,
  });

  const handleDateClick = (date) => {
    if (!range.from || (range.from && range.to)) {
      setRange({ from: date, to: null });
      return;
    }

    if (isSameDay(date, range.from)) {
      setRange({ from: null, to: null });
      return;
    }

    if (isBefore(date, range.from)) {
      setRange({ from: date, to: null });
      return;
    }

    setRange((prev) => ({ ...prev, to: date }));
  };

  const resetRange = () => setRange({ from: null, to: null });

  return {
    range,
    handleDateClick,
    resetRange,
  };
};