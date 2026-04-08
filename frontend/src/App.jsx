import React, {useState, useEffect} from 'react';
import CalendarContainer from '@/components/calendar/CalendarContainer';
import NotesArea from '@/components/notes/NotesArea';
import { useDateRange } from '@/hooks/useDateRange';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { INITIAL_NOTES } from '@/constants/mockData';

function App() {
  const { range, handleDateClick } = useDateRange();
  
  const [notes, setNotes] = useLocalStorage('calendar-notes', INITIAL_NOTES);

  const addNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 md:py-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 w-full">
            <CalendarContainer 
              range={range} 
              onDateClick={handleDateClick} 
            />
            
            {range.from && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-700 animate-in fade-in slide-in-from-bottom-2">
                <span className="font-bold">Selection:</span> {range.from.toDateString()} 
                {range.to ? ` — ${range.to.toDateString()}` : ' (Select end date)'}
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-white paper-texture p-6 rounded-xl shadow-sm min-h-[500px] border border-gray-100">
            <NotesArea 
              selectedDate={range.from} 
              notes={notes} 
              onAddNote={addNote} 
              onDeleteNote={deleteNote} 
            />
          </div>

        </div>

        <footer className="mt-12 text-center text-gray-400 text-xs">
          <p>TUF Frontend Engineering Challenge • Wall Calendar Component</p>
          <p className="mt-1 italic">Built with React, Tailwind CSS, and Shadcn UI</p>
        </footer>
      </div>
    </div>
  );
}

export default App;