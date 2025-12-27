import { SessionType, TimerState } from '../types';

/**
 * Displays the timer countdown and progress visualization
 */
export class TimerDisplay {
  private container: HTMLElement;
  private timeElement: HTMLElement | null;
  private progressElement: HTMLElement | null;
  private sessionLabelElement: HTMLElement | null;
  private sessionCountElement: HTMLElement | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.timeElement = null;
    this.progressElement = null;
    this.sessionLabelElement = null;
    this.sessionCountElement = null;
    this.render();
  }

  /**
   * Create and render the timer display UI
   *
   * TODO: Implement render
   * - Create time display element (show MM:SS format)
   * - Create progress ring/circle/bar element
   * - Create session type label (Work, Short Break, Long Break)
   * - Create session counter (e.g., "1/4", "2/4")
   * - Add all elements to container
   * - Store references to elements for updates
   * - Add CSS classes for styling (you'll style these later)
   *
   * Suggested structure:
   * <div class="timer-display">
   *   <div class="progress-ring">
   *     <!-- SVG circle or CSS-based progress indicator -->
   *   </div>
   *   <div class="time">25:00</div>
   *   <div class="session-label">Work Session</div>
   *   <div class="session-count">1/4</div>
   * </div>
   */
  render(): void {
    // TODO: Implement this method
    // Create elements using createElement for security
    const displayDiv = document.createElement('div');
    displayDiv.className = 'timer-display';

    // TODO: Create progress ring element

    this.timeElement = document.createElement('div');
    this.timeElement.className = 'time';
    this.timeElement.textContent = '25:00';

    const todoText = document.createElement('p');
    todoText.textContent = 'TODO: Add progress ring, session label, and session counter';

    displayDiv.appendChild(this.timeElement);
    displayDiv.appendChild(todoText);

    // TODO: Create and append session label and counter elements
    // this.sessionLabelElement = document.createElement('div');
    // this.sessionCountElement = document.createElement('div');

    this.container.appendChild(displayDiv);
  }

  /**
   * Update the time display
   * @param timeRemaining - Time in seconds
   * @param totalTime - Total session duration in seconds
   *
   * TODO: Implement time update
   * - Convert seconds to MM:SS format
   * - Update timeElement text content
   * - Calculate progress percentage (timeRemaining / totalTime)
   * - Update progress ring/circle (stroke-dashoffset for SVG, or CSS)
   */
  updateTime(timeRemaining: number, totalTime: number): void {
    // TODO: Implement this method
    if (this.timeElement) {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      this.timeElement.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // TODO: Update progress visualization
  }

  /**
   * Update session information display
   * @param sessionType - Current session type
   * @param sessionCount - Current session count (1-4)
   * @param totalSessions - Total sessions until long break (typically 4)
   *
   * TODO: Implement session info update
   * - Update session label text based on sessionType
   *   - WORK: "Work Session" or "Focus Time"
   *   - SHORT_BREAK: "Short Break"
   *   - LONG_BREAK: "Long Break"
   * - Update session counter (e.g., "2/4")
   * - Change colors/styles based on session type
   */
  updateSessionInfo(
    sessionType: SessionType,
    sessionCount: number,
    totalSessions: number = 4
  ): void {
    // TODO: Implement this method
  }

  /**
   * Update display based on timer state
   * @param state - Current timer state
   *
   * TODO: Implement state-based updates
   * - Add/remove CSS classes based on state
   *   - IDLE: show initial state
   *   - WORK/PAUSED: show work state
   *   - BREAK states: show break state
   * - Enable/disable animations
   * - Change colors/themes
   */
  updateState(state: TimerState): void {
    // TODO: Implement this method
  }

  /**
   * Format seconds to MM:SS string
   */
  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}
