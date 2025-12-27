import { Task, TaskFilter } from '../types';

/**
 * Task management UI component
 */
export class TaskList {
  private container: HTMLElement;
  private taskInputElement: HTMLInputElement | null;
  private taskListElement: HTMLElement | null;
  private filterButtons: HTMLElement | null;
  private currentFilter: TaskFilter;

  // Callbacks
  private onAddTask: ((title: string, estimated: number) => void) | null;
  private onCompleteTask: ((id: string) => void) | null;
  private onDeleteTask: ((id: string) => void) | null;
  private onSelectTask: ((id: string) => void) | null;
  private onFilterChange: ((filter: TaskFilter) => void) | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.taskInputElement = null;
    this.taskListElement = null;
    this.filterButtons = null;
    this.currentFilter = 'all';
    this.onAddTask = null;
    this.onCompleteTask = null;
    this.onDeleteTask = null;
    this.onSelectTask = null;
    this.onFilterChange = null;
    this.render();
  }

  /**
   * Render the task list UI
   *
   * TODO: Implement render
   * - Create task input form (title input, estimated pomodoros input, add button)
   * - Create filter buttons (All, Active, Completed)
   * - Create task list container
   * - Add event listeners for form submission and filters
   * - Add CSS classes for styling
   *
   * Suggested structure:
   * <div class="task-list">
   *   <form class="task-form">
   *     <input type="text" placeholder="What are you working on?" />
   *     <input type="number" placeholder="Estimated pomodoros" />
   *     <button>Add Task</button>
   *   </form>
   *   <div class="task-filters">
   *     <button>All</button>
   *     <button>Active</button>
   *     <button>Completed</button>
   *   </div>
   *   <ul class="tasks"></ul>
   * </div>
   */
  render(): void {
    // TODO: Implement this method
    const taskListDiv = document.createElement('div');
    taskListDiv.className = 'task-list';

    const todoText = document.createElement('p');
    todoText.textContent = 'TODO: Add task input form, filters, and task list';

    taskListDiv.appendChild(todoText);
    this.container.appendChild(taskListDiv);
  }

  /**
   * Render a single task item
   * @param task - Task to render
   *
   * TODO: Implement task item rendering
   * - Create list item element
   * - Add task title
   * - Add pomodoro counter (e.g., "3/5 pomodoros")
   * - Add complete button/checkbox
   * - Add delete button
   * - Add select/activate button for current task
   * - Add event listeners for actions
   * - Apply completed styles if task is done
   * - Return the created element
   */
  renderTask(task: Task): HTMLElement {
    // TODO: Implement this method
    const li = document.createElement('li');
    li.className = 'task-item';

    const title = document.createElement('span');
    title.textContent = task.title;

    li.appendChild(title);
    // TODO: Add pomodoro counter, buttons, etc.

    return li;
  }

  /**
   * Update the displayed task list
   * @param tasks - Array of tasks to display
   *
   * TODO: Implement task list update
   * - Clear current task list
   * - Render each task using renderTask()
   * - Append to task list container
   * - Show empty state if no tasks
   */
  updateTasks(tasks: Task[]): void {
    // TODO: Implement this method
  }

  /**
   * Set callback for adding a task
   */
  setOnAddTask(callback: (title: string, estimated: number) => void): void {
    this.onAddTask = callback;
  }

  /**
   * Set callback for completing a task
   */
  setOnCompleteTask(callback: (id: string) => void): void {
    this.onCompleteTask = callback;
  }

  /**
   * Set callback for deleting a task
   */
  setOnDeleteTask(callback: (id: string) => void): void {
    this.onDeleteTask = callback;
  }

  /**
   * Set callback for selecting current task
   */
  setOnSelectTask(callback: (id: string) => void): void {
    this.onSelectTask = callback;
  }

  /**
   * Set callback for filter change
   */
  setOnFilterChange(callback: (filter: TaskFilter) => void): void {
    this.onFilterChange = callback;
  }

  /**
   * Handle add task form submission
   *
   * TODO: Implement form submission
   * - Get values from input fields
   * - Validate inputs (non-empty title, positive number)
   * - Call onAddTask callback
   * - Clear form inputs
   * - Prevent default form submission
   */
  private handleAddTask(event: Event): void {
    // TODO: Implement this method
  }

  /**
   * Handle filter button click
   * @param filter - Selected filter
   *
   * TODO: Implement filter change
   * - Update currentFilter
   * - Update active button styles
   * - Call onFilterChange callback
   */
  private handleFilterChange(filter: TaskFilter): void {
    // TODO: Implement this method
  }
}
