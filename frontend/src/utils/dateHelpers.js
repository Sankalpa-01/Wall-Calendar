import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isSameMonth 
} from "date-fns";

export const getCalendarDays = (year, month) => {
  const targetDate = new Date(year, month);
  
  const start = startOfWeek(startOfMonth(targetDate), { weekStartsOn: 1 }); 
  const end = endOfWeek(endOfMonth(targetDate), { weekStartsOn: 1 });

  return eachDayOfInterval({ start, end });
};

export const formatDateKey = (date) => {
  return format(date, "yyyy-MM-dd");
};

export const isCurrentMonth = (date, currentMonthDate) => {
  return isSameMonth(date, currentMonthDate);
};