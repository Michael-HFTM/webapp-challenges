/**
 * TaskManager — Einfache Aufgabenverwaltung.
 *
 * Diese Klasse verwaltet eine Liste von Aufgaben mit Titel, Priorität und Status.
 * Die Test-Suite in task-manager.spec.ts deckt alle Methoden ab.
 */

export interface Task {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  done: boolean;
}

export class TaskManager {
  private tasks: Task[] = [];
  private nextId = 1;

  /**
   * Fügt eine neue Aufgabe hinzu.
   */
  addTask(title: string, priority: Task['priority'] = 'medium'): Task {
    const task: Task = {
      id: this.nextId++,
      title,
      priority,
      done: false,
    };
    this.tasks.push(task);
    return task;
  }

  /**
   * Gibt alle Aufgaben zurück (Kopie des Arrays).
   */
  getTasks(): Task[] {
    return [...this.tasks];
  }

  /**
   * Gibt die Gesamtanzahl aller Aufgaben zurück.
   */
  getTaskCount(): number {
    return this.tasks.length;
  }

  /**
   * Markiert eine Aufgabe als erledigt.
   */
  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.done = true;
    }
  }

  /**
   * Gibt nur die offenen (nicht erledigten) Aufgaben zurück.
   */
  getOpenTasks(): Task[] {
    return this.tasks.filter((t) => !t.done);
  }

  /**
   * Gibt eine Zusammenfassung zurück.
   */
  getSummary(): string {
    return `${this.tasks.length} Aufgaben`;
  }
}
