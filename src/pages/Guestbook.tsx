import { useEffect, useState, type FormEvent } from 'react';
import {
  guestbook,
  usingDatabase,
  type GuestEntry,
} from '../services/guestbook';
import './Guestbook.css';

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // New-entry form
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Inline edit
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');

  // READ — load entries on mount
  useEffect(() => {
    let active = true;
    guestbook
      .list()
      .then((rows) => active && setEntries(rows))
      .catch(() => active && setError('Could not load the guestbook.'))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  // CREATE
  const add = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || message.trim().length < 2) return;
    setBusy(true);
    setError(null);
    try {
      const entry = await guestbook.create(name.trim(), message.trim());
      setEntries((prev) => [entry, ...prev]);
      setName('');
      setMessage('');
    } catch {
      setError('Could not add your entry.');
    } finally {
      setBusy(false);
    }
  };

  // UPDATE
  const save = async (id: string) => {
    if (draft.trim().length < 2) return;
    setBusy(true);
    try {
      const updated = await guestbook.update(id, draft.trim());
      setEntries((prev) => prev.map((e) => (e.id === id ? updated : e)));
      setEditingId(null);
    } catch {
      setError('Could not save your edit.');
    } finally {
      setBusy(false);
    }
  };

  // DELETE
  const remove = async (id: string) => {
    setBusy(true);
    try {
      await guestbook.remove(id);
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setError('Could not delete that entry.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="page container rise">
      <h1 className="page-title">Sign the guestbook</h1>
      <p className="lead">
        A working create / read / update / delete demo. Entries are{' '}
        {usingDatabase
          ? 'stored in a Postgres database.'
          : 'stored in your browser for now'}
      </p>

      <form className="gb-form" onSubmit={add}>
        <input
          className="gb-input"
          placeholder="Your name"
          value={name}
          maxLength={40}
          onChange={(e) => setName(e.target.value)}
          aria-label="Your name"
        />
        <input
          className="gb-input gb-input--grow"
          placeholder="Leave a message…"
          value={message}
          maxLength={240}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Your message"
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={busy || !name.trim() || message.trim().length < 2}
        >
          Post
        </button>
      </form>

      {error && <p className="gb-error">{error}</p>}

      {loading ? (
        <p className="gb-muted">Loading…</p>
      ) : entries.length === 0 ? (
        <p className="gb-muted">No entries yet — be the first.</p>
      ) : (
        <ul className="gb-list">
          {entries.map((entry) => (
            <li key={entry.id} className="card gb-entry">
              <div className="gb-entry__head">
                <span className="gb-entry__name">{entry.name}</span>
                <span className="gb-entry__date">
                  {new Date(entry.created_at).toLocaleDateString()}
                </span>
              </div>

              {editingId === entry.id ? (
                <div className="gb-edit">
                  <input
                    className="gb-input"
                    value={draft}
                    maxLength={240}
                    onChange={(e) => setDraft(e.target.value)}
                    aria-label="Edit message"
                  />
                  <div className="gb-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() => save(entry.id)}
                      disabled={busy}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-ghost"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="gb-entry__msg">{entry.message}</p>
                  <div className="gb-actions">
                    <button
                      className="gb-link"
                      onClick={() => {
                        setEditingId(entry.id);
                        setDraft(entry.message);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="gb-link gb-link--danger"
                      onClick={() => remove(entry.id)}
                      disabled={busy}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
