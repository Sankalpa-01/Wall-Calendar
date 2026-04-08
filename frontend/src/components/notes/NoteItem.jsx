import React from 'react';
import { format, parseISO } from 'date-fns';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="group relative border-l-2 border-blue-500 pl-4 py-2 mb-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
          {format(parseISO(note.date), 'MMM dd, yyyy')}
        </span>
        <button 
          onClick={() => onDelete(note.id)}
          className="text-gray-300 hover:text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-700 mt-1 leading-relaxed">
        {note.content}
      </p>
    </div>
  );
};

export default NoteItem;