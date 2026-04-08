import React from 'react';
import DayCell from './DayCell';
import { getCalendarDays, isCurrentMonth } from '@/utils/dateHelpers';
import { cn } from '@/lib/utils';

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarGrid = ({ year, month, range, onDateClick }) => {
  const days = getCalendarDays(year, month);
  const currentMonthDate = new Date(year, month);

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map(day => (
          <div key={day} className={cn(
            "text-center text-xs font-bold py-2",
            (day === 'SAT' || day === 'SUN') ? "text-blue-400" : "text-gray-500"
          )}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((date, index) => (
          <DayCell
            key={index}
            date={date}
            range={range}
            onClick={onDateClick}
            isCurrentMonth={isCurrentMonth(date, currentMonthDate)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;