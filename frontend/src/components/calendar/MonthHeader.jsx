import React from 'react';

const MonthHeader = ({ monthName, year }) => {
  return (
    <div className="flex flex-col items-end justify-center pr-8 pb-4 text-white">
      <span className="text-2xl font-light tracking-widest">{year}</span>
      <h2 className="text-5xl font-bold tracking-tighter uppercase">
        {monthName}
      </h2>
    </div>
  );
};

export default MonthHeader;