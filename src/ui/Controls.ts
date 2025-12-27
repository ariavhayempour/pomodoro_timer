import { TimerState } from '../types';

/**
 * Timer control buttons (start, pause, reset, skip)
 */
export class Controls {
  private container: HTMLElement;
  private startButton: HTMLButtonElement | null;
  private pauseButton: HTMLButtonElement | null;
  private resetButton: HTMLButtonElement | null;
  private skipButton: HTMLButtonElement | null;

  // Callbacks for button actions
  private onStart: (() => void) | null;
  private onPause: (() => void) | null;
  private onReset: (() => void) | null;
  private onSkip: (() => void) | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.startButton = null;
    this.pauseButton = null;
    this.resetButton = null;
    this.skipButton = null;
    this.onStart = null;
    this.onPause = null;
    this.onReset = null;
    this.onSkip = null;
    this.render();
  }

  /**
   * Create and render control buttons
   *
   * TODO: Implement render
   * - Create start button
   * - Create pause button
   * - Create reset button
   * - Create skip button
   * - Add click event listeners to each button
   * - Add CSS classes for styling
   * - Append buttons to container
   */
  render(): void {
    // TODO: Implement this method
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'controls';

    this.startButton = document.createElement('button');
    this.startButton.className = 'btn btn-start';
    this.startButton.textContent = 'Start';
    // TODO: Add click event listener

    const todoText = document.createElement('p');
    todoText.textContent = 'TODO: Add pause, reset, and skip buttons';

    controlsDiv.appendChild(this.startButton);
    controlsDiv.appendChild(todoText);

    this.container.appendChild(controlsDiv);
  }

  /**
   * Set callback for start button
   */
  setOnStart(callback: () => void): void {
    this.onStart = callback;
    // TODO: Attach event listener if button exists
  }

  /**
   * Set callback for pause button
   */
  setOnPause(callback: () => void): void {
    this.onPause = callback;
    // TODO: Attach event listener if button exists
  }

  /**
   * Set callback for reset button
   */
  setOnReset(callback: () => void): void {
    this.onReset = callback;
    // TODO: Attach event listener if button exists
  }

  /**
   * Set callback for skip button
   */
  setOnSkip(callback: () => void): void {
    this.onSkip = callback;
    // TODO: Attach event listener if button exists
  }

  /**
   * Update button states based on timer state
   * @param state - Current timer state
   *
   * TODO: Implement button state updates
   * - When IDLE: enable start, disable pause
   * - When WORK/BREAK (running): disable start, enable pause
   * - When PAUSED: enable start (show "Resume"), disable pause
   * - Always enable reset and skip when not IDLE
   * - Change button text: "Start" vs "Resume"
   * - Add/remove disabled attribute
   * - Add/remove CSS classes for visual states
   */
  updateButtonStates(state: TimerState): void {
    // TODO: Implement this method
  }

  /**
   * Enable all buttons
   */
  enable(): void {
    // TODO: Implement enable
  }

  /**
   * Disable all buttons
   */
  disable(): void {
    // TODO: Implement disable
  }
}
