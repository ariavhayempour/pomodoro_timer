# Pomodoro Timer

A full-featured Pomodoro timer web application built with TypeScript and Vite. This project provides a complete structure with TODOs for you to implement the core algorithms and UI functionality.

## Features

- **Classic Pomodoro Technique**: 25-min work, 5-min short break, 15-min long break after 4 sessions
- **Task Management**: Track tasks and their pomodoro counts
- **Statistics**: View productivity stats and analytics
- **Browser Notifications**: Get notified when sessions complete
- **Customizable Settings**: Adjust durations, sounds, and preferences
- **Persistent Storage**: All data saved to localStorage

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000 to see the app.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pomodoro_timer/
├── src/
│   ├── core/           # Core timer logic and utilities
│   │   ├── EventEmitter.ts       # Pub/sub event system (TODOs)
│   │   ├── PomodoroTimer.ts      # Timer engine with state machine (TODOs)
│   │   ├── NotificationManager.ts # Browser notifications (TODOs)
│   │   └── StorageManager.ts     # localStorage wrapper (TODOs)
│   ├── domain/         # Business logic
│   │   ├── Task.ts               # Task model and utilities (TODOs)
│   │   ├── TaskManager.ts        # Task CRUD operations (TODOs)
│   │   ├── Statistics.ts         # Productivity tracking (TODOs)
│   │   └── Settings.ts           # User preferences (TODOs)
│   ├── ui/             # UI components
│   │   ├── TimerDisplay.ts       # Timer visualization (TODOs)
│   │   ├── Controls.ts           # Control buttons (TODOs)
│   │   ├── TaskList.ts           # Task management UI (TODOs)
│   │   ├── StatsPanel.ts         # Statistics display (TODOs)
│   │   └── SettingsPanel.ts      # Settings form (TODOs)
│   ├── types/          # TypeScript types
│   │   └── index.ts              # All type definitions
│   ├── main.ts         # Application bootstrap (TODOs)
│   └── style.css       # Styles (TODOs)
├── docs/
│   └── plans/
│       └── 2025-12-26-pomodoro-timer-design.md  # Full design document
├── index.html          # HTML entry point (TODOs)
└── package.json
```

## Where to Implement

### 1. Core Timer Logic (`src/core/`)

**EventEmitter.ts** - Implement the event system:
- `on()` - Subscribe to events
- `off()` - Unsubscribe from events
- `emit()` - Trigger events
- `clear()` - Clear listeners

**PomodoroTimer.ts** - Implement the timer algorithms:
- `start()` - Start/resume timer
- `pause()` - Pause timer
- `reset()` - Reset to initial state
- `skip()` - Skip to next session
- `tick()` - Countdown logic (called every second)
- `complete()` - Handle session completion and transitions
- `getNextSession()` - Determine next session type

**NotificationManager.ts** - Implement notifications:
- `requestPermission()` - Request browser permission
- `notify()` - Show browser notification
- `notifySessionComplete()` - Create session-specific messages
- `playSound()` - Play completion sound

**StorageManager.ts** - Implement localStorage:
- `save()` - Save data to localStorage
- `load()` - Load data from localStorage
- `remove()` - Remove data
- `clear()` - Clear all app data
- `exists()` - Check if key exists
- `getAllKeys()` - List all app keys

### 2. Domain Logic (`src/domain/`)

**Task.ts** - Implement task utilities:
- `createTask()` - Create new task with ID
- `completeTask()` - Mark task complete
- `incrementPomodoro()` - Increment pomodoro count
- `updateTask()` - Update task properties

**TaskManager.ts** - Implement task management:
- `addTask()` - Add new task
- `removeTask()` - Delete task
- `updateTask()` - Update task
- `completeTask()` - Complete task
- `incrementTaskPomodoro()` - Increment current task
- `setCurrentTask()` - Set active task
- `getTasks()` - Get filtered tasks
- `loadTasks()` / `saveTasks()` - Persistence

**Statistics.ts** - Implement analytics:
- `trackSession()` - Record completed session
- `getTodayStats()` - Calculate today's stats
- `getWeeklyStats()` - Calculate 7-day stats
- `getProductivityScore()` - YOUR CUSTOM ALGORITHM!
- `getSessionHistory()` - Get session history
- `loadSessions()` / `saveSessions()` - Persistence

**Settings.ts** - Implement settings:
- `updateSettings()` - Update preferences
- `resetToDefaults()` - Reset settings
- `updateSetting()` - Update single setting
- `loadSettings()` / `saveSettings()` - Persistence
- `validateSettings()` - Validate values

### 3. UI Components (`src/ui/`)

**TimerDisplay.ts** - Implement timer visualization:
- `render()` - Create DOM elements with your structure
- `updateTime()` - Update countdown display and progress ring
- `updateSessionInfo()` - Update session labels
- `updateState()` - Update based on timer state

**Controls.ts** - Implement control buttons:
- `render()` - Create button elements
- `updateButtonStates()` - Enable/disable based on state
- Event handlers for each button

**TaskList.ts** - Implement task UI:
- `render()` - Create task form and list
- `renderTask()` - Render individual task item
- `updateTasks()` - Update displayed tasks
- `handleAddTask()` - Form submission
- `handleFilterChange()` - Filter tasks

**StatsPanel.ts** - Implement statistics display:
- `render()` - Create stats UI structure
- `updateTodayStats()` - Display daily numbers
- `renderWeeklyChart()` - YOUR CHART VISUALIZATION!
- `updateProductivityScore()` - Display score with visual indicator

**SettingsPanel.ts** - Implement settings form:
- `render()` - Create form with all inputs
- `loadSettings()` - Populate form values
- `getFormValues()` - Extract form data
- `handleSave()` - Save settings
- `handleNotificationPermission()` - Request permission

### 4. Application Bootstrap (`src/main.ts`)

**main.ts** - Wire everything together:
- `init()` - Initialize application
- `initUI()` - Initialize all UI components
- `setupTimerListeners()` - Subscribe to timer events
- `setupControlCallbacks()` - Wire control buttons
- `setupTaskListCallbacks()` - Wire task list
- `setupSettingsPanelCallbacks()` - Wire settings
- `handleSessionComplete()` - Handle completion
- `switchView()` - Navigate between views
- `applySettings()` - Apply settings to components

### 5. Frontend (`index.html` and `src/style.css`)

**index.html** - Add your HTML structure:
- Header with navigation
- Timer view section
- Tasks view section
- Stats view section
- Settings view section

**style.css** - Add your styles:
- Timer display styles (large time, progress ring)
- Button styles (hover, active, disabled states)
- Task list styles (completed, active states)
- Stats panel styles (charts, score visualization)
- Settings form styles
- Theme support (light/dark)
- Responsive design
- Animations

## Implementation Tips

### Timer Algorithm
The timer needs to:
1. Count down from initial time every second
2. Emit `tick` event each second for UI updates
3. Emit `sessionComplete` when time reaches 0
4. Automatically transition to next session type
5. Track session count for long break (every 4 work sessions)

### Progress Ring
Options for progress visualization:
- SVG circle with `stroke-dasharray` and `stroke-dashoffset`
- CSS conic-gradient
- Canvas-based drawing

### Statistics
Your productivity score algorithm could consider:
- Consistency (days with activity this week)
- Volume (total pomodoros)
- Completion rate (completed vs estimated)
- Streaks (consecutive days)

### Notifications
Request permission on first settings access or timer start.
Show different messages for work vs break completion.

## Design Document

See `docs/plans/2025-12-26-pomodoro-timer-design.md` for the complete architecture and design decisions.

## License

ISC