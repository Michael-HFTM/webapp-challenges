export type Blog = {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
};

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: 'Erste Schritte mit Angular',
    author: 'Max Muster',
    content:
      'Angular ist ein mächtiges Framework für Single-Page Applications. In diesem Beitrag zeige ich dir die Grundlagen der komponentenbasierten Architektur und wie du dein erstes Projekt mit der Angular CLI aufsetzt.',
    date: '2025-01-15',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    author: 'Anna Beispiel',
    content:
      'TypeScript bringt Typsicherheit in die JavaScript-Welt. Hier sind die wichtigsten Patterns, die du kennen solltest: Utility Types, Generics, Discriminated Unions und strenge Compiler-Optionen für robusteren Code.',
    date: '2025-02-01',
  },
  {
    id: 3,
    title: 'Signals vs. RxJS',
    author: 'Max Muster',
    content:
      'Mit Angular 21 sind Signals der neue Standard für State Management. Warum der Wechsel von RxJS sinnvoll ist und wie du signal(), computed() und effect() in deinen Komponenten einsetzt.',
    date: '2025-03-10',
  },
];
