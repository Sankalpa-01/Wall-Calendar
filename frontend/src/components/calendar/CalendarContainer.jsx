import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addMonths, subMonths } from 'date-fns';
import CalendarGrid from './CalendarGrid';
import MonthHeader from './MonthHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MONTH_CONFIGS } from '@/constants/mockData';

const CalendarContainer = ({ range, onDateClick, apiHolidays }) => {
  const [viewDate, setViewDate] = useState(new Date()); 
  
  const monthIndex = viewDate.getMonth();
  const year = viewDate.getFullYear();
  
  const currentConfig = MONTH_CONFIGS[monthIndex];

  const handleNext = () => setViewDate(addMonths(viewDate, 1));
  const handlePrev = () => setViewDate(subMonths(viewDate, 1));
  const goToToday = () => setViewDate(new Date());

  return (
    <Card className="paper-texture relative overflow-hidden border-none shadow-2xl transition-all duration-700 max-w-4xl mx-auto">
      <div className="spiral-binding absolute top-0 left-0 z-30 opacity-60" />

      <div className="absolute top-6 right-6 z-40 flex items-center gap-2">
        <Button 
          variant="secondary" 
          size="xs" 
          className="bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={goToToday}
        >
          Today
        </Button>
        <div className="flex bg-white/80 backdrop-blur-sm rounded-md border shadow-sm">
          <Button variant="ghost" size="sm" onClick={handlePrev} className="px-3">←</Button>
          <div className="w-[1px] h-4 bg-gray-200 self-center" />
          <Button variant="ghost" size="sm" onClick={handleNext} className="px-3">→</Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${monthIndex}-${year}`}
          initial={{ opacity: 0, y: 10, rotateX: -5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -10, rotateX: 5 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="relative h-64 md:h-96 w-full overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={currentConfig.hero} 
              alt={currentConfig.name}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 flex items-end transition-colors duration-1000"
              style={{ background: `linear-gradient(to top, ${currentConfig.color}99, transparent)` }}
            >
              <MonthHeader 
                monthName={currentConfig.name} 
                year={year} 
              />
            </div>
          </div>

          <div className="p-8 bg-white">
            <CalendarGrid 
              year={year} 
              month={monthIndex} 
              range={range} 
              onDateClick={onDateClick} 
              themeColor={currentConfig.color}
              apiHolidays={apiHolidays}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};

export default CalendarContainer;