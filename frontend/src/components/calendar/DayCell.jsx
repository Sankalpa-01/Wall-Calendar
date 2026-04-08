import React from 'react';
import { format, isSameDay, isWithinInterval, isToday } from 'date-fns';
import { cn } from '@/lib/utils';
import { FALLBACK_HOLIDAYS } from '@/constants/mockData';

const DayCell = ({ date, isCurrentMonth, range, onClick, themeColor, apiHolidays = [] }) => {
  const isStart = range.from && isSameDay(date, range.from);
  const isEnd = range.to && isSameDay(date, range.to);
  const isInRange = range.from && range.to && isWithinInterval(date, { start: range.from, end: range.to });

  const currentDay = isToday(date); 

  const dateStr = format(date, 'yyyy-MM-dd');
  const holiday = apiHolidays.find(h => h.date === dateStr) || FALLBACK_HOLIDAYS.find(h => h.date === dateStr);

  return (
    <button
      onClick={() => onClick(date)}
      style={(isStart || isEnd) ? { backgroundColor: themeColor, color: 'white' } : {}}
      className={cn(
        "relative h-12 w-full flex items-center justify-center text-sm transition-all rounded-md",
        "hover:bg-gray-100 focus:outline-none",
        
        currentDay && !isStart && !isEnd && "bg-blue-50 ring-2 ring-blue-500 ring-inset shadow-sm",
        
        !isCurrentMonth && "text-gray-300 opacity-40", 
        isCurrentMonth && !isStart && !isEnd && "text-gray-900 font-medium",
        
        isInRange && !isStart && !isEnd && "bg-blue-50 text-blue-600",
        (isStart || isEnd) && "z-10 shadow-lg scale-105 font-bold"
      )}
    >
      {format(date, 'd')}

      {holiday && (
        <span className="absolute bottom-2 w-1 h-1 bg-red-500 rounded-full" />
      )}

      {currentDay && (
        <span className="absolute top-1 right-1 text-[7px] font-bold text-blue-500 uppercase">
          Today
        </span>
      )}
    </button>
  );
};

export default DayCell;