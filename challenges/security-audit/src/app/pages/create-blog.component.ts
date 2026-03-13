import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Neuen Blog-Beitrag erstellen</h1>
    <form class="form">
      <label>Titel</label>
      <input type="text" placeholder="Titel eingeben..." />
      <label>Inhalt</label>
      <textarea rows="6" placeholder="Inhalt schreiben..."></textarea>
      <button type="submit">Veröffentlichen</button>
    </form>
    <a routerLink="/blogs" class="back-link">&larr; Zurück</a>
  `,
})
export default class CreateBlogComponent {}
