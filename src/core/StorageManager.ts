/**
 * Manages localStorage persistence for app data
 */
export class StorageManager {
  private prefix: string;

  constructor(prefix: string = 'pomodoro_') {
    this.prefix = prefix;
  }

  /**
   * Save data to localStorage
   * @param key - Storage key
   * @param data - Data to save (will be JSON stringified)
   *
   * TODO: Implement save logic
   * - Stringify the data using JSON.stringify()
   * - Save to localStorage with prefixed key
   * - Handle errors (quota exceeded, etc.)
   * - Return success/failure
   */
  save<T>(key: string, data: T): boolean {
    // TODO: Implement this method
    throw new Error('StorageManager.save() not implemented');
  }

  /**
   * Load data from localStorage
   * @param key - Storage key
   * @returns Parsed data or null if not found
   *
   * TODO: Implement load logic
   * - Get item from localStorage with prefixed key
   * - Parse JSON data
   * - Handle errors (invalid JSON, etc.)
   * - Return parsed data or null
   */
  load<T>(key: string): T | null {
    // TODO: Implement this method
    throw new Error('StorageManager.load() not implemented');
  }

  /**
   * Remove data from localStorage
   * @param key - Storage key
   *
   * TODO: Implement remove logic
   * - Remove item from localStorage with prefixed key
   */
  remove(key: string): void {
    // TODO: Implement this method
    throw new Error('StorageManager.remove() not implemented');
  }

  /**
   * Clear all app data from localStorage
   *
   * TODO: Implement clear logic
   * - Iterate through all localStorage keys
   * - Remove keys that start with this.prefix
   * - Or use localStorage.clear() if only this app uses it
   */
  clear(): void {
    // TODO: Implement this method
    throw new Error('StorageManager.clear() not implemented');
  }

  /**
   * Check if a key exists in storage
   * @param key - Storage key
   *
   * TODO: Implement exists check
   * - Check if prefixed key exists in localStorage
   * - Return boolean
   */
  exists(key: string): boolean {
    // TODO: Implement this method
    throw new Error('StorageManager.exists() not implemented');
  }

  /**
   * Get all keys with the app prefix
   *
   * TODO: Implement key listing
   * - Iterate through all localStorage keys
   * - Filter keys that start with this.prefix
   * - Return array of keys (without prefix)
   */
  getAllKeys(): string[] {
    // TODO: Implement this method
    throw new Error('StorageManager.getAllKeys() not implemented');
  }
}

// Export singleton instance
export const storage = new StorageManager();
