import { describe, it, expect, beforeEach } from 'vitest';
import { TaskManager } from './task-manager';

describe('TaskManager', () => {
  let manager: TaskManager;

  beforeEach(() => {
    manager = new TaskManager();
    manager.addTask('Deployment konfigurieren', 'high');
    manager.addTask('API dokumentieren', 'low');
    manager.addTask('Bug in Login fixen', 'high');
    manager.addTask('Code Review', 'medium');
  });

  // ─── Aufgaben hinzufügen ────────────────────────────────────

  it('should add a task with correct properties', () => {
    const task = manager.addTask('Neuer Task', 'low');
    expect(task.title).toBe('Neuer Task');
    expect(task.priority).toBe('low');
    expect(task.done).toBe(false);
    expect(task.id).toBe(5);
  });

  // ─── Aufgaben abrufen ───────────────────────────────────────

  it('should return tasks in insertion order', () => {
    const titles = manager.getTasks().map((t) => t.title);
    expect(titles).toEqual([
      'Deployment konfigurieren',
      'API dokumentieren',
      'Bug in Login fixen',
      'Code Review',
    ]);
  });

  it('should return a copy of the tasks array', () => {
    const tasks = manager.getTasks();
    tasks.push({
      id: 99,
      title: 'Hack',
      priority: 'low',
      done: false,
    });
    expect(manager.getTasks()).toHaveLength(4);
  });

  // ─── Zählen ─────────────────────────────────────────────────

  it('should return total task count', () => {
    expect(manager.getTaskCount()).toBe(4);
  });

  // ─── Zusammenfassung ────────────────────────────────────────

  it('should display summary with total count', () => {
    expect(manager.getSummary()).toBe('4 Aufgaben');
  });

  // ─── Aufgaben erledigen ─────────────────────────────────────

  it('should mark a task as completed', () => {
    manager.completeTask(1);
    const task = manager.getTasks().find((t) => t.id === 1);
    expect(task?.done).toBe(true);
  });

  it('should not throw when completing a non-existent task', () => {
    expect(() => manager.completeTask(999)).not.toThrow();
  });

  // ─── Offene Aufgaben ────────────────────────────────────────

  it('should return only open tasks', () => {
    manager.completeTask(1);
    manager.completeTask(3);
    const open = manager.getOpenTasks();
    expect(open).toHaveLength(2);
    expect(open.every((t) => !t.done)).toBe(true);
  });

  it('should return all tasks as open when none are completed', () => {
    expect(manager.getOpenTasks()).toHaveLength(4);
  });
});
