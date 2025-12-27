# Pomodoro Timer - Design Document

**Date:** 2025-12-26
**Type:** Web Application
**Stack:** TypeScript + Vite + Vanilla HTML/CSS

## Overview

A full-featured Pomodoro timer web application implementing the classic Pomodoro technique (25 min work, 5 min short break, 15 min long break after 4 sessions). The application includes task management, statistics tracking, browser notifications, and customizable settings.

## Architecture

### Layered Architecture

The application follows a layered architecture to maintain separation of concerns:

**Core Layer** (`src/core/`)
- Timer engine with state machine
- Notification management
- Storage/persistence
- Event system

**Domain Layer** (`src/domain/`)
- Task management
- Statistics tracking
- Settings/preferences

**UI Layer** (`src/ui/`)
- Visual components
- User interactions
- Display logic

**Main** (`src/main.ts`)
- Application bootstrap
- Component wiring
- View routing

### Core Components

#### PomodoroTimer (Timer Engine)

The heart of the application managing timer state and transitions.

**States:**
- `IDLE` - Not started
- `WORK` - 25-minute focus session
- `SHORT_BREAK` - 5-minute break
- `LONG_BREAK` - 15-minute break (after 4 work sessions)
- `PAUSED` - Timer paused

**Key Methods (with TODOs):**
- `tick()` - Countdown logic (TODO)
- `start()` - Start/resume timer (TODO)
- `pause()` - Pause current session (TODO)
- `reset()` - Reset to initial state (TODO)
- `skip()` - Skip to next session (TODO)
- `complete()` - Handle session completion and auto-transition (TODO)

**Properties:**
- Current state
- Time remaining
- Session count (for tracking 4-session cycle)
- Current session type

#### EventEmitter

Simple pub/sub pattern for component communication.

**Events:**
- `tick` - Emitted every second for display updates
- `stateChange` - Emitted on state transitions (WORK → BREAK)
- `sessionComplete` - Emitted when timer reaches zero
- `pomodoroComplete` - Emitted when work session completes (for task tracking)

**Methods (with TODOs):**
- `on(event, callback)` - Subscribe to events (TODO)
- `emit(event, data)` - Trigger events (TODO)
- `off(event, callback)` - Unsubscribe (TODO)

#### NotificationManager

Handles browser notifications for session completions.

**Methods (with TODOs):**
- `requestPermission()` - Request notification permissions (TODO)
- `notify(title, body)` - Show notification (TODO)
- `playSound()` - Play completion sound (TODO)

#### StorageManager

Manages localStorage persistence.

**Methods (with TODOs):**
- `save(key, data)` - Serialize and save (TODO)
- `load(key)` - Load and deserialize (TODO)
- `clear()` - Clear all data (TODO)

### Domain Components

#### Task

**Properties:**
- `id` - Unique identifier
- `title` - Task description
- `estimatedPomodoros` - Estimated work sessions needed
- `completedPomodoros` - Sessions completed on this task
- `completed` - Task completion status
- `createdAt` - Timestamp
- `completedAt` - Completion timestamp

#### TaskManager

**Methods (with TODOs):**
- `addTask(title, estimatedPomodoros)` - Create new task (TODO)
- `removeTask(id)` - Delete task (TODO)
- `updateTask(id, updates)` - Update task properties (TODO)
- `completeTask(id)` - Mark task complete (TODO)
- `incrementPomodoro(id)` - Add completed session (TODO)
- `filterTasks(filter)` - Filter active/completed (TODO)
- `getTasks()` - Get all tasks (TODO)

#### Statistics

Tracks and analyzes productivity data.

**Methods (with TODOs):**
- `trackSession(type, timestamp)` - Record completed session (TODO)
- `getTodayStats()` - Calculate today's pomodoros and focus time (TODO)
- `getWeeklyStats()` - Calculate 7-day trend (TODO)
- `getProductivityScore()` - Custom productivity metric (TODO)
- `getSessionHistory()` - Get historical data (TODO)

#### Settings

User preferences and configuration.

**Properties:**
- `workDuration` - Work session length (default: 25 min)
- `shortBreakDuration` - Short break length (default: 5 min)
- `longBreakDuration` - Long break length (default: 15 min)
- `autoStartBreaks` - Auto-start breaks after work
- `autoStartWork` - Auto-start work after breaks
- `soundEnabled` - Enable completion sounds
- `soundVolume` - Volume level (0-100)
- `notificationsEnabled` - Enable browser notifications
- `theme` - UI theme (light/dark)

**Methods (with TODOs):**
- `updateSettings(updates)` - Update preferences (TODO)
- `resetToDefaults()` - Reset to default values (TODO)

### UI Components

All UI components follow the same pattern:
- Constructor creates DOM elements (structure provided, styling TODO)
- `render()` method with TODO for DOM manipulation
- Event handlers with TODO for logic
- `update()` method with TODO for state synchronization

#### TimerDisplay

Visual countdown display with circular progress ring.

**Elements:**
- Time display (MM:SS format)
- Progress ring/circle
- Session type label (Work/Break)
- Session counter (1/4, 2/4, etc.)

**Methods (with TODOs):**
- `render()` - Create DOM structure (TODO: add styles)
- `update(timeRemaining, totalTime)` - Update display and progress (TODO)
- `updateSessionInfo(type, count)` - Update labels (TODO)

#### Controls

Timer control buttons.

**Buttons:**
- Start/Pause (toggle based on state)
- Reset
- Skip to next session

**Methods (with TODOs):**
- `render()` - Create button elements (TODO: add styles)
- `updateButtonStates(timerState)` - Enable/disable based on state (TODO)
- Event handlers for each button (TODO)

#### TaskList

Task management interface.

**Elements:**
- Task input form
- Task list display
- Filter controls (All/Active/Completed)

**Methods (with TODOs):**
- `render()` - Create task UI (TODO: add styles)
- `renderTask(task)` - Render individual task item (TODO)
- `handleAddTask()` - Add task form submission (TODO)
- `handleCompleteTask(id)` - Task completion (TODO)
- `handleDeleteTask(id)` - Task deletion (TODO)
- `handleFilterChange(filter)` - Filter tasks (TODO)

#### StatsPanel

Statistics and analytics display.

**Elements:**
- Today's stats (pomodoros completed, focus time)
- Weekly chart/graph
- Productivity score
- Session history

**Methods (with TODOs):**
- `render()` - Create stats UI (TODO: add styles)
- `updateTodayStats(stats)` - Update daily numbers (TODO)
- `renderWeeklyChart(data)` - Render chart visualization (TODO)
- `updateProductivityScore(score)` - Update score display (TODO)

#### SettingsPanel

Configuration interface.

**Elements:**
- Duration inputs (work, short break, long break)
- Auto-start toggles
- Sound settings (enable, volume)
- Notification toggle
- Theme selector

**Methods (with TODOs):**
- `render()` - Create settings form (TODO: add styles)
- `loadSettings(settings)` - Populate form with current settings (TODO)
- `handleSave()` - Save settings changes (TODO)
- `handleReset()` - Reset to defaults (TODO)

## Data Flow

### Event-Driven Communication

Components communicate via the EventEmitter pattern:

1. **Timer Tick Flow:**
   - `PomodoroTimer` emits `'tick'` event every second
   - `TimerDisplay` subscribes and updates countdown display

2. **Session Completion Flow:**
   - Timer reaches zero → emits `'sessionComplete'`
   - `NotificationManager` shows browser notification
   - `Statistics` records the completed session
   - Timer auto-transitions to next state → emits `'stateChange'`

3. **Pomodoro Completion Flow:**
   - Work session completes → emits `'pomodoroComplete'`
   - `TaskManager` increments active task's pomodoro count
   - `Statistics` updates productivity metrics

4. **User Interaction Flow:**
   - User clicks control button → `Controls` calls timer method
   - Timer updates state → emits events
   - All subscribed components update their displays

### State Persistence

**StorageManager** handles all localStorage operations:

**Saved Data:**
- Settings object (durations, preferences)
- Tasks array (all tasks with metadata)
- Statistics history (session records)

**Save Triggers:**
- Settings change
- Task CRUD operations
- Session completion

**Load Triggers:**
- Application initialization
- Page reload

## File Structure

```
pomodoro_timer/
├── docs/
│   └── plans/
│       └── 2025-12-26-pomodoro-timer-design.md
├── src/
│   ├── core/
│   │   ├── PomodoroTimer.ts
│   │   ├── EventEmitter.ts
│   │   ├── NotificationManager.ts
│   │   └── StorageManager.ts
│   ├── domain/
│   │   ├── Task.ts
│   │   ├── TaskManager.ts
│   │   ├── Statistics.ts
│   │   └── Settings.ts
│   ├── ui/
│   │   ├── TimerDisplay.ts
│   │   ├── Controls.ts
│   │   ├── TaskList.ts
│   │   ├── StatsPanel.ts
│   │   └── SettingsPanel.ts
│   ├── types/
│   │   └── index.ts
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Implementation Strategy

### Phase 1: Core Timer
1. Set up Vite + TypeScript project
2. Implement EventEmitter with TODOs
3. Implement PomodoroTimer skeleton with TODOs for algorithms
4. Create basic TimerDisplay with TODOs for styling
5. Create Controls with TODOs for event handlers

### Phase 2: Persistence
1. Implement StorageManager with TODOs
2. Implement Settings with TODOs
3. Create SettingsPanel with TODOs

### Phase 3: Task Management
1. Implement Task model
2. Implement TaskManager with TODOs
3. Create TaskList UI with TODOs

### Phase 4: Statistics
1. Implement Statistics with TODOs for calculations
2. Create StatsPanel with TODOs for visualization

### Phase 5: Notifications
1. Implement NotificationManager with TODOs
2. Integrate with timer completion events

### Phase 6: Polish
1. Add CSS styling (left as TODOs)
2. Add sound effects (TODO)
3. Add animations (TODO)
4. Testing and refinement

## Key TODOs for Implementation

Throughout the codebase, the following types of TODOs will be present:

**Algorithm TODOs:**
- Timer countdown logic
- State transition algorithms
- Statistics calculations
- Task filtering/sorting
- Productivity scoring

**UI TODOs:**
- DOM manipulation
- Event handlers
- CSS styling
- Animations
- Progress visualization

**Feature TODOs:**
- Browser notification implementation
- Sound playback
- LocalStorage serialization
- Chart/graph rendering

This design ensures you have a clear structure to work within while maintaining the flexibility to implement the core algorithms and UI details yourself.
