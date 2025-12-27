// Type definitions for the Pomodoro Timer application

export enum TimerState {
  IDLE = 'IDLE',
  WORK = 'WORK',
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK',
  PAUSED = 'PAUSED'
}

export enum SessionType {
  WORK = 'WORK',
  SHORT_BREAK = 'SHORT_BREAK',
  LONG_BREAK = 'LONG_BREAK'
}

export type TimerEvent =
  | 'tick'
  | 'stateChange'
  | 'sessionComplete'
  | 'pomodoroComplete';

export interface TimerConfig {
  workDuration: number;      // in seconds
  shortBreakDuration: number; // in seconds
  longBreakDuration: number;  // in seconds
  sessionsUntilLongBreak: number; // typically 4
}

export interface Task {
  id: string;
  title: string;
  estimatedPomodoros: number;
  completedPomodoros: number;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export interface SessionRecord {
  type: SessionType;
  timestamp: Date;
  duration: number; // actual duration in seconds
  taskId?: string;  // optional task association
}

export interface Settings {
  workDuration: number;      // in minutes
  shortBreakDuration: number; // in minutes
  longBreakDuration: number;  // in minutes
  autoStartBreaks: boolean;
  autoStartWork: boolean;
  soundEnabled: boolean;
  soundVolume: number;       // 0-100
  notificationsEnabled: boolean;
  theme: 'light' | 'dark';
}

export interface DailyStats {
  date: Date;
  pomodorosCompleted: number;
  totalFocusTime: number;    // in seconds
  totalBreakTime: number;    // in seconds
  tasksCompleted: number;
}

export interface WeeklyStats {
  days: DailyStats[];
  totalPomodoros: number;
  totalFocusTime: number;
  averagePerDay: number;
}

export type TaskFilter = 'all' | 'active' | 'completed';

export type EventCallback = (...args: any[]) => void;
