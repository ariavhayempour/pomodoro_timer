import './style.css';
import { PomodoroTimer } from './core/PomodoroTimer';
import { NotificationManager } from './core/NotificationManager';
import { TaskManager } from './domain/TaskManager';
import { Statistics } from './domain/Statistics';
import { SettingsManager } from './domain/Settings';
import { TimerDisplay } from './ui/TimerDisplay';
import { Controls } from './ui/Controls';
import { TaskList } from './ui/TaskList';
import { StatsPanel } from './ui/StatsPanel';
import { SettingsPanel } from './ui/SettingsPanel';
import { SessionType } from './types';

/**
 * Main application class
 * Bootstraps and wires together all components
 */
class PomodoroApp {
  private timer: PomodoroTimer;
  private notifications: NotificationManager;
  private taskManager: TaskManager;
  private statistics: Statistics;
  private settingsManager: SettingsManager;

  // UI Components
  private timerDisplay: TimerDisplay | null;
  private controls: Controls | null;
  private taskList: TaskList | null;
  private statsPanel: StatsPanel | null;
  private settingsPanel: SettingsPanel | null;

  // View management
  private currentView: 'timer' | 'tasks' | 'stats' | 'settings';

  constructor() {
    // Initialize domain/core components
    this.settingsManager = new SettingsManager();
    this.timer = new PomodoroTimer();
    this.notifications = new NotificationManager();
    this.taskManager = new TaskManager();
    this.statistics = new Statistics();

    // UI components (will be initialized after DOM is ready)
    this.timerDisplay = null;
    this.controls = null;
    this.taskList = null;
    this.statsPanel = null;
    this.settingsPanel = null;

    this.currentView = 'timer';
  }

  /**
   * Initialize the application
   *
   * TODO: Implement initialization
   * - Wait for DOM to be ready
   * - Initialize UI components
   * - Wire up event listeners
   * - Load settings and apply to timer
   * - Request notification permission
   * - Start the app
   */
  async init(): Promise<void> {
    // TODO: Implement this method
    console.log('TODO: Initialize application');

    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initUI());
    } else {
      this.initUI();
    }
  }

  /**
   * Initialize UI components
   *
   * TODO: Implement UI initialization
   * - Get container elements from DOM
   * - Initialize each UI component with its container
   * - Wire up component callbacks
   * - Set up timer event listeners
   * - Set up navigation between views
   */
  private initUI(): void {
    // TODO: Implement this method
    console.log('TODO: Initialize UI components');

    // Example:
    // const timerContainer = document.getElementById('timer-view');
    // if (timerContainer) {
    //   this.timerDisplay = new TimerDisplay(timerContainer);
    //   this.controls = new Controls(timerContainer);
    //   this.setupTimerListeners();
    //   this.setupControlCallbacks();
    // }
  }

  /**
   * Set up timer event listeners
   *
   * TODO: Implement timer event setup
   * - Listen to 'tick' event -> update timer display
   * - Listen to 'stateChange' event -> update UI state
   * - Listen to 'sessionComplete' event -> notify user, update stats
   * - Listen to 'pomodoroComplete' event -> increment task pomodoro
   */
  private setupTimerListeners(): void {
    // TODO: Implement this method
    console.log('TODO: Set up timer event listeners');
  }

  /**
   * Set up control button callbacks
   *
   * TODO: Implement control callbacks
   * - Set onStart callback -> call timer.start()
   * - Set onPause callback -> call timer.pause()
   * - Set onReset callback -> call timer.reset()
   * - Set onSkip callback -> call timer.skip()
   */
  private setupControlCallbacks(): void {
    // TODO: Implement this method
    console.log('TODO: Set up control callbacks');
  }

  /**
   * Set up task list callbacks
   *
   * TODO: Implement task list callbacks
   * - Set onAddTask -> call taskManager.addTask()
   * - Set onCompleteTask -> call taskManager.completeTask()
   * - Set onDeleteTask -> call taskManager.removeTask()
   * - Set onSelectTask -> call taskManager.setCurrentTask()
   * - Set onFilterChange -> update displayed tasks
   */
  private setupTaskListCallbacks(): void {
    // TODO: Implement this method
    console.log('TODO: Set up task list callbacks');
  }

  /**
   * Set up settings panel callbacks
   *
   * TODO: Implement settings callbacks
   * - Set onSave -> update settings, apply to timer, save to storage
   * - Set onReset -> reset to defaults, update UI
   */
  private setupSettingsPanelCallbacks(): void {
    // TODO: Implement this method
    console.log('TODO: Set up settings panel callbacks');
  }

  /**
   * Handle session completion
   * @param sessionType - Type of session that completed
   *
   * TODO: Implement session completion handling
   * - Show notification
   * - Play sound
   * - Record in statistics
   * - If work session, increment current task pomodoro
   * - Update stats panel if visible
   */
  private handleSessionComplete(sessionType: SessionType): void {
    // TODO: Implement this method
    console.log('TODO: Handle session completion', sessionType);
  }

  /**
   * Switch between views
   * @param view - View to switch to
   *
   * TODO: Implement view switching
   * - Hide all view containers
   * - Show selected view container
   * - Update navigation active state
   * - Update currentView property
   * - Refresh data if needed (e.g., stats when switching to stats view)
   */
  switchView(view: 'timer' | 'tasks' | 'stats' | 'settings'): void {
    // TODO: Implement this method
    console.log('TODO: Switch to view', view);
    this.currentView = view;
  }

  /**
   * Apply settings to timer and other components
   * @param settings - Settings to apply
   *
   * TODO: Implement settings application
   * - Update timer config (durations)
   * - Update notification settings
   * - Apply theme
   * - Save to storage
   */
  private applySettings(settings: Partial<import('./types').Settings>): void {
    // TODO: Implement this method
    console.log('TODO: Apply settings', settings);
  }
}

// Bootstrap the application
const app = new PomodoroApp();
app.init();

// Export for debugging in console
(window as any).app = app;
