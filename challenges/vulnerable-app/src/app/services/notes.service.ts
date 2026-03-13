import { Injectable, signal } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
  author: string;
  comments: Comment[];
}

export interface Comment {
  author: string;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class NotesService {
  private notes = signal<Note[]>([
    {
      id: 1,
      title: 'Willkommen bei SecureNotes',
      content: '<h3>Erste Schritte</h3><p>SecureNotes ist deine sichere Notiz-App. Hier kannst du Notizen erstellen, kommentieren und teilen.</p><ul><li>Erstelle Notizen</li><li>Kommentiere andere Notizen</li><li>Verwalte dein Profil</li></ul>',
      author: 'admin',
      comments: [
        { author: 'user1', text: 'Super App!' },
        { author: 'hacker42', text: '<img src=x onerror="document.title=\'XSS\'"> Cooler Beitrag!' },
      ],
    },
    {
      id: 2,
      title: 'Angular Best Practices',
      content: '<p>Angular bietet viele eingebaute Sicherheitsfeatures. Hier die wichtigsten:</p><p><strong>1. Auto-Sanitization:</strong> Angular escaped HTML automatisch.</p><p><strong>2. DomSanitizer:</strong> Für Fälle, wo du HTML rendern musst.</p><p><strong>3. CSP:</strong> Content Security Policy als zusätzlicher Schutz.</p>',
      author: 'admin',
      comments: [
        { author: 'student', text: 'Danke für die Übersicht!' },
      ],
    },
    {
      id: 3,
      title: 'Meeting-Notizen Q4',
      content: '<p>Agenda für das Q4 Planning Meeting:</p><ol><li>Budget-Review</li><li>Projekt-Updates</li><li>Neue Features für v2.0</li></ol><p><em>Vertraulich -- nur für Team-Mitglieder</em></p>',
      author: 'admin',
      comments: [],
    },
  ]);

  getNotes(): Note[] {
    return this.notes();
  }

  getNote(id: number): Note | undefined {
    return this.notes().find((n) => n.id === id);
  }

  addComment(noteId: number, comment: Comment) {
    this.notes.update((notes) =>
      notes.map((n) =>
        n.id === noteId ? { ...n, comments: [...n.comments, comment] } : n
      )
    );
  }
}
