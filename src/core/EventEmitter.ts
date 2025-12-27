import { EventCallback } from '../types';

/**
 * Simple event emitter for pub/sub pattern between components
 */
export class EventEmitter {
  private events: Map<string, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  /**
   * Subscribe to an event
   * @param event - Event name
   * @param callback - Function to call when event is emitted
   *
   * TODO: Implement subscription logic
   * - Store the callback in the events map under the event name
   * - Initialize array if event doesn't exist
   * - Add callback to the array
   */
  on(event: string, callback: EventCallback): void {
    // TODO: Implement this method
    throw new Error('EventEmitter.on() not implemented');
  }

  /**
   * Unsubscribe from an event
   * @param event - Event name
   * @param callback - The callback to remove
   *
   * TODO: Implement unsubscription logic
   * - Find the callback in the events map
   * - Remove it from the array
   * - Clean up empty arrays
   */
  off(event: string, callback: EventCallback): void {
    // TODO: Implement this method
    throw new Error('EventEmitter.off() not implemented');
  }

  /**
   * Emit an event to all subscribers
   * @param event - Event name
   * @param args - Arguments to pass to callbacks
   *
   * TODO: Implement emit logic
   * - Get all callbacks for the event
   * - Call each callback with the provided arguments
   * - Handle errors gracefully (try/catch around each callback)
   */
  emit(event: string, ...args: any[]): void {
    // TODO: Implement this method
    throw new Error('EventEmitter.emit() not implemented');
  }

  /**
   * Remove all listeners for an event, or all events if no event specified
   * @param event - Optional event name
   *
   * TODO: Implement clear logic
   * - If event provided, clear that event's callbacks
   * - If no event provided, clear all events
   */
  clear(event?: string): void {
    // TODO: Implement this method
    throw new Error('EventEmitter.clear() not implemented');
  }
}
