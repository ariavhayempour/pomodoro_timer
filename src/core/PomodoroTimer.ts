import { EventEmitter } from './EventEmitter';
import { TimerState, SessionType, TimerConfig } from '../types';

/**
 * Core Pomodoro Timer Engine
 * Manages timer state, countdown, and session transitions
 */
export class PomodoroTimer extends EventEmitter {
  private state: TimerState;
  private currentSession: SessionType;
  private timeRemaining: number; // in seconds
  private sessionCount: number;  // tracks work sessions for long break
  private intervalId: number | null;
  private config: TimerConfig;

  constructor(config?: Partial<TimerConfig>) {
    super();

    // Default classic Pomodoro configuration
    this.config = {
      workDuration: config?.workDuration || 25 * 60,           // 25 minutes
      shortBreakDuration: config?.shortBreakDuration || 5 * 60, // 5 minutes
      longBreakDuration: config?.longBreakDuration || 15 * 60,  // 15 minutes
      sessionsUntilLongBreak: config?.sessionsUntilLongBreak || 4
    };

    this.state = TimerState.IDLE;
    this.currentSession = SessionType.WORK;
    this.timeRemaining = this.config.workDuration;
    this.sessionCount = 0;
    this.intervalId = null;
  }

  /**
   * Start or resume the timer
   *
   * TODO: Implement start logic
   * - If state is IDLE, set state to WORK
   * - If state is PAUSED, resume from current time
   * - Start the interval (call tick() every second)
   * - Emit 'stateChange' event
   */
  start(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.start() not implemented');
  }

  /**
   * Pause the timer
   *
   * TODO: Implement pause logic
   * - Stop the interval
   * - Set state to PAUSED
   * - Emit 'stateChange' event
   */
  pause(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.pause() not implemented');
  }

  /**
   * Reset the timer to initial state
   *
   * TODO: Implement reset logic
   * - Stop the interval
   * - Set state to IDLE
   * - Reset timeRemaining to work duration
   * - Reset sessionCount to 0
   * - Set currentSession to WORK
   * - Emit 'stateChange' event
   */
  reset(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.reset() not implemented');
  }

  /**
   * Skip to the next session
   *
   * TODO: Implement skip logic
   * - Stop current interval
   * - Determine next session type (use getNextSession())
   * - Update state and timeRemaining
   * - Emit 'stateChange' event
   * - Optionally restart timer if it was running
   */
  skip(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.skip() not implemented');
  }

  /**
   * Called every second to countdown
   *
   * TODO: Implement tick logic
   * - Decrease timeRemaining by 1 second
   * - Emit 'tick' event with current time
   * - If timeRemaining reaches 0, call complete()
   */
  private tick(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.tick() not implemented');
  }

  /**
   * Handle session completion
   *
   * TODO: Implement completion logic
   * - Stop the interval
   * - Emit 'sessionComplete' event with session type
   * - If session was WORK, emit 'pomodoroComplete' and increment sessionCount
   * - Determine next session (use getNextSession())
   * - Update state and timeRemaining for next session
   * - Emit 'stateChange' event
   * - Optionally auto-start next session based on settings
   */
  private complete(): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.complete() not implemented');
  }

  /**
   * Determine the next session type based on current session and count
   *
   * TODO: Implement next session logic
   * - If current is WORK:
   *   - Check if sessionCount reached sessionsUntilLongBreak
   *   - Return LONG_BREAK if yes, SHORT_BREAK if no
   * - If current is SHORT_BREAK or LONG_BREAK:
   *   - Return WORK
   * - If long break just completed, reset sessionCount to 0
   */
  private getNextSession(): SessionType {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.getNextSession() not implemented');
  }

  /**
   * Update timer configuration
   *
   * TODO: Implement config update
   * - Update this.config with new values
   * - If timer is IDLE, update timeRemaining to new work duration
   * - Emit 'stateChange' if necessary
   */
  updateConfig(config: Partial<TimerConfig>): void {
    // TODO: Implement this method
    throw new Error('PomodoroTimer.updateConfig() not implemented');
  }

  // Getters for UI components
  getState(): TimerState {
    return this.state;
  }

  getCurrentSession(): SessionType {
    return this.currentSession;
  }

  getTimeRemaining(): number {
    return this.timeRemaining;
  }

  getSessionCount(): number {
    return this.sessionCount;
  }

  getConfig(): TimerConfig {
    return { ...this.config };
  }

  /**
   * Get total duration for current session type
   */
  getTotalTime(): number {
    switch (this.currentSession) {
      case SessionType.WORK:
        return this.config.workDuration;
      case SessionType.SHORT_BREAK:
        return this.config.shortBreakDuration;
      case SessionType.LONG_BREAK:
        return this.config.longBreakDuration;
      default:
        return this.config.workDuration;
    }
  }
}
