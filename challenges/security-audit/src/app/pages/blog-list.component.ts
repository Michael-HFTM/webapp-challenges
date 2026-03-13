import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { BLOGS } from '../data/blogs';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  template: `
    <h1>Blog-Beiträge</h1>
    <div class="blog-list">
      @for (blog of blogs; track blog.id) {
        <article class="blog-card">
          <h2>
            <a [routerLink]="['/blogs', blog.id]">{{ blog.title }}</a>
          </h2>
          <p class="meta">{{ blog.author }} &middot; {{ blog.date }}</p>
          <p>{{ blog.content | slice: 0 : 120 }}...</p>
        </article>
      }
    </div>
  `,
})
export default class BlogListComponent {
  blogs = BLOGS;
}
