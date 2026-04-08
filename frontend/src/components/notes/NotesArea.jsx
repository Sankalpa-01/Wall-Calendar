import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import NoteItem from './NoteItem';
import { formatDateKey } from '@/utils/dateHelpers';

const NotesArea = ({ selectedDate, notes, onAddNote, onDeleteNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newNote = {
      id: crypto.randomUUID(),
      date: formatDateKey(selectedDate || new Date()),
      content: text,
    };

    onAddNote(newNote);
    setText('');
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
          Notes {selectedDate && `— ${formatDateKey(selectedDate)}`}
        </h3>
        <p className="text-xs text-gray-500">
          Add a memo for the selected date or the month.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Textarea
          placeholder="Jot down a memo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[100px] bg-gray-50/50 border-dashed resize-none focus-visible:ring-blue-500"
        />
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={!text.trim()}
        >
          Add Note
        </Button>
      </form>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {notes.length === 0 ? (
          <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-lg">
            <p className="text-xs text-gray-400 italic">No notes for this month yet.</p>
          </div>
        ) : (
          notes
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((note) => (
              <NoteItem key={note.id} note={note} onDelete={onDeleteNote} />
            ))
        )}
      </div>
    </div>
  );
};

export default NotesArea;