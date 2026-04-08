export const MONTH_CONFIGS = {
  0: { name: "January", color: "#0078d4", hero: "/Jan_Image.png" },
  1: { name: "February", color: "#4f6a7d", hero: "/Feb_Image.png" },
  2: { name: "March", color: "#e66dbd", hero: "/Mar_Image.png" },
  3: { name: "April", color: "#2e7d32", hero: "/Apr_Image.png" },
  4: { name: "May", color: "#fbc02d", hero: "/May_Image.png" },
  5: { name: "June", color: "#00acc1", hero: "/Jun_Image.png" },
  6: { name: "July", color: "#2d5a27", hero: "/Jul_Image.png" },
  7: { name: "August", color: "#bf360c", hero: "/Aug_Image.png" },
  8: { name: "September", color: "#d84315", hero: "/Sep_Image.png" },
  9: { name: "October", color: "#3e2723", hero: "/Oct_Image.png" },
  10: { name: "November", color: "#5d4037", hero: "/Nov_Image.png" },
  11: { name: "December", color: "#1a237e", hero: "/Dec_Image.png" },
};

export const CALENDAR_SETTINGS = {
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  countryCode: "IN", 
};

export const INITIAL_NOTES = [
  {
    id: "1",
    date: new Date().toISOString().split('T')[0],
    content: "Calendar initialized with real-time date sync.",
  },
  {
    id: "2",
    date: "2026-08-15",
    content: "Review project milestones.",
  }
];

export const FALLBACK_HOLIDAYS = [
  { date: "2026-01-01", name: "New Year's Day" },
  { date: "2026-01-26", name: "Republic Day" },
  { date: "2026-08-15", name: "Independence Day" },
  { date: "2026-10-02", name: "Gandhi Jayanti" },
  { date: "2026-12-25", name: "Christmas" },
];

export const getNoteForDate = (notes, dateString) => {
  return notes.filter((note) => note.date === dateString);
};