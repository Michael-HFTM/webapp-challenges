import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Notizen</h1>
    <br>
    @for (note of notesService.getNotes(); track note.id) {
      <div class="card">
        <h3>
          <a [routerLink]="['/notes', note.id]">{{ note.title }}</a>
        </h3>
        <p style="color: #666; font-size: 0.85rem;">
          Von {{ note.author }} · {{ note.comments.length }} Kommentare
        </p>
      </div>
    }
  `,
})
export class NotesComponent {
  notesService = inject(NotesService);
}
