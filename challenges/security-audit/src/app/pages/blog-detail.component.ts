import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOGS, Blog } from '../data/blogs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (blog) {
      <article>
        <h1>{{ blog.title }}</h1>
        <p class="meta">{{ blog.author }} &middot; {{ blog.date }}</p>
        <p>{{ blog.content }}</p>
      </article>
      <hr />
      <h3>Weitere Beiträge</h3>
      <ul>
        @for (other of otherBlogs; track other.id) {
          <li>
            <a [routerLink]="['/blogs', other.id]">{{ other.title }}</a>
          </li>
        }
      </ul>
    } @else {
      <p>Blog-Beitrag nicht gefunden.</p>
    }
    <a routerLink="/blogs" class="back-link">&larr; Zurück zur Übersicht</a>
  `,
})
export default class BlogDetailComponent implements OnInit {
  blog: Blog | undefined;
  otherBlogs: Blog[] = [];

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = BLOGS.find((b) => b.id === id);
    this.otherBlogs = BLOGS.filter((b) => b.id !== id);
  }
}
