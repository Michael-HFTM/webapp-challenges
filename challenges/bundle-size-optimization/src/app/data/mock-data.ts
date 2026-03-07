export interface AppEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: 'conference' | 'workshop' | 'meetup' | 'webinar';
  attendees: number;
  maxAttendees: number;
  price: number;
  imageUrl: string;
}

export const EVENTS: AppEvent[] = [
  {
    id: 1,
    title: 'Angular Connect 2025',
    description: 'Die grösste Angular-Konferenz Europas mit Talks zu Signals, SSR und Performance.',
    date: '2025-09-15',
    location: 'Zürich, Kongresshaus',
    category: 'conference',
    attendees: 342,
    maxAttendees: 500,
    price: 299,
    imageUrl: 'https://picsum.photos/seed/angular/400/200',
  },
  {
    id: 2,
    title: 'TypeScript Deep Dive',
    description: 'Hands-on Workshop zu Advanced Types, Generics und Utility Types.',
    date: '2025-10-03',
    location: 'Bern, Welle 7',
    category: 'workshop',
    attendees: 28,
    maxAttendees: 30,
    price: 149,
    imageUrl: 'https://picsum.photos/seed/typescript/400/200',
  },
  {
    id: 3,
    title: 'Frontend Meetup Bern',
    description: 'Monatliches Meetup der Berner Frontend-Community. Pizza und Talks inklusive.',
    date: '2025-08-21',
    location: 'Bern, Coworking Space',
    category: 'meetup',
    attendees: 45,
    maxAttendees: 60,
    price: 0,
    imageUrl: 'https://picsum.photos/seed/meetup/400/200',
  },
  {
    id: 4,
    title: 'Web Security Basics',
    description: 'Webinar zu OWASP Top 10, XSS-Prävention und sichere Angular-Apps.',
    date: '2025-11-12',
    location: 'Online (Zoom)',
    category: 'webinar',
    attendees: 89,
    maxAttendees: 200,
    price: 49,
    imageUrl: 'https://picsum.photos/seed/security/400/200',
  },
  {
    id: 5,
    title: 'DevOps & CI/CD Workshop',
    description: 'Von GitHub Actions bis Docker: Automatisierte Pipelines für Angular-Projekte.',
    date: '2025-12-05',
    location: 'Luzern, Technopark',
    category: 'workshop',
    attendees: 18,
    maxAttendees: 25,
    price: 199,
    imageUrl: 'https://picsum.photos/seed/devops/400/200',
  },
  {
    id: 6,
    title: 'Accessibility in Angular',
    description: 'Barrierefreie Web-Apps mit Angular Material und ARIA. Inklusive Live-Audit.',
    date: '2026-01-20',
    location: 'Basel, Messe',
    category: 'conference',
    attendees: 156,
    maxAttendees: 300,
    price: 179,
    imageUrl: 'https://picsum.photos/seed/a11y/400/200',
  },
];

export interface EventStats {
  totalEvents: number;
  totalAttendees: number;
  averagePrice: number;
  categoryCounts: { category: string; count: number }[];
  monthlyTrend: { month: string; events: number }[];
  revenueByCategory: { category: string; revenue: number }[];
}

export function calculateStats(events: AppEvent[]): EventStats {
  const categoryCounts = new Map<string, number>();
  const revenueByCategory = new Map<string, number>();
  const monthlyTrend = new Map<string, number>();

  for (const event of events) {
    categoryCounts.set(event.category, (categoryCounts.get(event.category) ?? 0) + 1);
    revenueByCategory.set(
      event.category,
      (revenueByCategory.get(event.category) ?? 0) + event.price * event.attendees
    );
    const month = event.date.substring(0, 7);
    monthlyTrend.set(month, (monthlyTrend.get(month) ?? 0) + 1);
  }

  return {
    totalEvents: events.length,
    totalAttendees: events.reduce((sum, e) => sum + e.attendees, 0),
    averagePrice: Math.round(events.reduce((sum, e) => sum + e.price, 0) / events.length),
    categoryCounts: [...categoryCounts.entries()].map(([category, count]) => ({ category, count })),
    monthlyTrend: [...monthlyTrend.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, events]) => ({ month, events })),
    revenueByCategory: [...revenueByCategory.entries()].map(([category, revenue]) => ({
      category,
      revenue,
    })),
  };
}
