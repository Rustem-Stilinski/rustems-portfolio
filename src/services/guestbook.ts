// Guestbook data layer with full CRUD (create / read / update / delete).
//
// If Supabase env vars are set, this talks to a real Postgres database over
// its REST API using fetch. Otherwise it falls back to localStorage so the
// page still works out of the box. Both paths expose the same interface.
//

export interface GuestEntry {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

export const usingDatabase = Boolean(SUPABASE_URL && SUPABASE_KEY);


const restUrl = `${SUPABASE_URL}/rest/v1/guestbook`;
const headers = {
  'Content-Type': 'application/json',
  apikey: SUPABASE_KEY ?? '',
  Authorization: `Bearer ${SUPABASE_KEY ?? ''}`,
};

const db = {
  async list(): Promise<GuestEntry[]> {
    const res = await fetch(`${restUrl}?select=*&order=created_at.desc`, {
      headers,
    });
    if (!res.ok) throw new Error('Failed to load entries');
    return res.json();
  },

  async create(name: string, message: string): Promise<GuestEntry> {
    const res = await fetch(restUrl, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=representation' },
      body: JSON.stringify({ name, message }),
    });
    if (!res.ok) throw new Error('Failed to add entry');
    const [row] = await res.json();
    return row;
  },

  async update(id: string, message: string): Promise<GuestEntry> {
    const res = await fetch(`${restUrl}?id=eq.${id}`, {
      method: 'PATCH',
      headers: { ...headers, Prefer: 'return=representation' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('Failed to update entry');
    const [row] = await res.json();
    return row;
  },

  async remove(id: string): Promise<void> {
    const res = await fetch(`${restUrl}?id=eq.${id}`, {
      method: 'DELETE',
      headers,
    });
    if (!res.ok) throw new Error('Failed to delete entry');
  },
};


const KEY = 'guestbook';

function read(): GuestEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as GuestEntry[]) : [];
  } catch {
    return [];
  }
}

function write(entries: GuestEntry[]) {
  localStorage.setItem(KEY, JSON.stringify(entries));
}

const local = {
  async list(): Promise<GuestEntry[]> {
    return read().sort((a, b) => b.created_at.localeCompare(a.created_at));
  },

  async create(name: string, message: string): Promise<GuestEntry> {
    const entry: GuestEntry = {
      id: crypto.randomUUID(),
      name,
      message,
      created_at: new Date().toISOString(),
    };
    write([entry, ...read()]);
    return entry;
  },

  async update(id: string, message: string): Promise<GuestEntry> {
    const entries = read();
    const idx = entries.findIndex((e) => e.id === id);
    if (idx === -1) throw new Error('Entry not found');
    entries[idx] = { ...entries[idx], message };
    write(entries);
    return entries[idx];
  },

  async remove(id: string): Promise<void> {
    write(read().filter((e) => e.id !== id));
  },
};

export const guestbook = usingDatabase ? db : local;
