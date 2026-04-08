# 📅 Interactive Wall Calendar Component

A high-fidelity, responsive React calendar component designed with a "Physical Wall Calendar" aesthetic. This project was developed as a submission for the **TUF Frontend Engineering Challenge**, focusing on clean UI, smooth interactions, and robust state management.

## ✨ Core Features

* **Wall Calendar Aesthetic:** Features a hero image section, visual spiral binding, and paper-textured backgrounds to emulate a real-world calendar.
* **Interactive Day Range Selector:** Allows users to select a "From" and "To" date range with clear, dynamic visual states.
* **Dynamic Theming:** UI accents and hero images transition based on the currently viewed month.
* **Integrated Notes Section:** A dedicated area to jot down memos. Notes are persistent across sessions using `localStorage`.
* **Responsive Architecture:** The layout automatically adjusts from a side-by-side view on desktops to a stacked view on mobile devices.
* **Smooth Transitions:** Utilizes `framer-motion` for a subtle "page-flip" animation when navigating between months.

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Components:** Shadcn UI
* **Date Manipulation:** `date-fns`
* **Animations:** Framer Motion
* **Persistence:** Browser LocalStorage

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sankalpa-01/Wall-Calendar.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd Wall-Calendar/frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── calendar/      # CalendarGrid, DayCell, MonthHeader
│   │   └── notes/         # NotesArea, NoteItem
│   ├── hooks/             # Custom hooks for range logic & storage
│   ├── utils/             # Date helpers and tailwind merging
│   └── constants/         # Month configurations and mock data
└── public/                # Monthly hero image assets
```

## 📝 Design Choices & Creative Liberty
To stand out, I prioritized the "Physicality" of the UI. Rather than a standard digital picker, this component uses high-quality landscape photography and custom CSS textures to feel like a premium printed product. The "Notes" area was designed with a ruled-paper effect to maintain this consistent design language.
