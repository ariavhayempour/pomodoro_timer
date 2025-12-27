import { Task, TaskFilter } from '../types';
import { createTask, completeTask as completeTaskUtil, incrementPomodoro, updateTask as updateTaskUtil } from './Task';
import { storage } from '../core/StorageManager';

/**
 * Manages task CRUD operations and persistence
 */
export class TaskManager {
  private tasks: Task[];
  private storageKey: string;
  private currentTaskId: string | null;

  constructor() {
    this.tasks = [];
    this.storageKey = 'tasks';
    this.currentTaskId = null;
    this.loadTasks();
  }

  /**
   * Add a new task
   * @param title - Task description
   * @param estimatedPomodoros - Estimated pomodoros needed
   *
   * TODO: Implement add task
   * - Use createTask() to create new task
   * - Add to this.tasks array
   * - Save to storage
   * - Return the new task
   */
  addTask(title: string, estimatedPomodoros: number = 1): Task {
    // TODO: Implement this method
    throw new Error('TaskManager.addTask() not implemented');
  }

  /**
   * Remove a task
   * @param id - Task ID to remove
   *
   * TODO: Implement remove task
   * - Find task index in array
   * - Remove from array
   * - If it was current task, set currentTaskId to null
   * - Save to storage
   * - Return true if found and removed, false otherwise
   */
  removeTask(id: string): boolean {
    // TODO: Implement this method
    throw new Error('TaskManager.removeTask() not implemented');
  }

  /**
   * Update a task
   * @param id - Task ID
   * @param updates - Properties to update
   *
   * TODO: Implement update task
   * - Find task in array
   * - Use updateTaskUtil() to update it
   * - Save to storage
   * - Return updated task or null if not found
   */
  updateTask(id: string, updates: Partial<Task>): Task | null {
    // TODO: Implement this method
    throw new Error('TaskManager.updateTask() not implemented');
  }

  /**
   * Mark a task as complete
   * @param id - Task ID
   *
   * TODO: Implement complete task
   * - Find task in array
   * - Use completeTaskUtil() to mark it complete
   * - If it was current task, set currentTaskId to null
   * - Save to storage
   * - Return updated task or null if not found
   */
  completeTask(id: string): Task | null {
    // TODO: Implement this method
    throw new Error('TaskManager.completeTask() not implemented');
  }

  /**
   * Increment pomodoro count for a task
   * @param id - Task ID (uses current task if not provided)
   *
   * TODO: Implement increment pomodoro
   * - Use provided id or currentTaskId
   * - Find task in array
   * - Use incrementPomodoro() to increment count
   * - Save to storage
   * - Return updated task or null
   */
  incrementTaskPomodoro(id?: string): Task | null {
    // TODO: Implement this method
    throw new Error('TaskManager.incrementTaskPomodoro() not implemented');
  }

  /**
   * Set the current active task
   * @param id - Task ID
   *
   * TODO: Implement set current task
   * - Verify task exists
   * - Set currentTaskId
   * - Save current task ID to storage separately
   */
  setCurrentTask(id: string | null): void {
    // TODO: Implement this method
    throw new Error('TaskManager.setCurrentTask() not implemented');
  }

  /**
   * Get current active task
   */
  getCurrentTask(): Task | null {
    if (!this.currentTaskId) return null;
    return this.tasks.find(t => t.id === this.currentTaskId) || null;
  }

  /**
   * Get all tasks, optionally filtered
   * @param filter - Filter type
   *
   * TODO: Implement get tasks with filter
   * - If filter is 'all', return all tasks
   * - If filter is 'active', return tasks where completed === false
   * - If filter is 'completed', return tasks where completed === true
   * - Sort by createdAt (newest first or oldest first - your choice)
   */
  getTasks(filter: TaskFilter = 'all'): Task[] {
    // TODO: Implement this method
    throw new Error('TaskManager.getTasks() not implemented');
  }

  /**
   * Get a specific task by ID
   */
  getTask(id: string): Task | null {
    return this.tasks.find(t => t.id === id) || null;
  }

  /**
   * Load tasks from storage
   *
   * TODO: Implement load tasks
   * - Use storage.load() to get tasks
   * - Parse dates (createdAt, completedAt) from strings to Date objects
   * - Set this.tasks
   * - Load currentTaskId from storage
   */
  private loadTasks(): void {
    // TODO: Implement this method
    // For now, just initialize empty
    this.tasks = [];
  }

  /**
   * Save tasks to storage
   *
   * TODO: Implement save tasks
   * - Use storage.save() to persist tasks array
   * - Save currentTaskId separately
   */
  private saveTasks(): void {
    // TODO: Implement this method
    throw new Error('TaskManager.saveTasks() not implemented');
  }

  /**
   * Clear all tasks
   *
   * TODO: Implement clear all
   * - Clear tasks array
   * - Clear currentTaskId
   * - Remove from storage
   */
  clearAll(): void {
    // TODO: Implement this method
    throw new Error('TaskManager.clearAll() not implemented');
  }
}
