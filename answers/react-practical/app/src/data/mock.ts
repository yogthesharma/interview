export type User = { id: number; name: string; email: string; company: string };

export const USERS: User[] = [
  { id: 1, name: "Ann Lee", email: "ann@example.com", company: "Acme Corp" },
  { id: 2, name: "Bob Kim", email: "bob@example.com", company: "Atlys" },
  { id: 3, name: "Carla Diaz", email: "carla@example.com", company: "IQM" },
  { id: 4, name: "Dan Wu", email: "dan@example.com", company: "Acme" },
  { id: 5, name: "Eva Novak", email: "eva@example.com", company: "Acme Corp" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", company: "Beta Co" },
  { id: 7, name: "Gita Rao", email: "gita@example.com", company: "Atlys" },
  { id: 8, name: "Hugo Silva", email: "hugo@example.com", company: "IQM" },
  { id: 9, name: "Ivy Chen", email: "ivy@example.com", company: "Acme Corp" },
  { id: 10, name: "Jake Ortiz", email: "jake@example.com", company: "Gamma" },
  { id: 11, name: "Kira Patel", email: "kira@example.com", company: "Atlys" },
  { id: 12, name: "Leo Braun", email: "leo@example.com", company: "IQM" },
];

export type Todo = { id: string; text: string; done: boolean };

export const INITIAL_TODOS: Todo[] = [
  { id: "1", text: "Review EOI flow", done: false },
  { id: "2", text: "Prep React practical", done: true },
];

export function generateItems(count: number): string[] {
  return Array.from({ length: count }, (_, i) => `Item ${i + 1}`);
}

export async function fetchMockUsers(): Promise<User[]> {
  await delay(600);
  return USERS;
}

export async function fetchMockUsersPage(page: number, pageSize: number): Promise<User[]> {
  await delay(400);
  const start = (page - 1) * pageSize;
  return USERS.slice(start, start + pageSize);
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
