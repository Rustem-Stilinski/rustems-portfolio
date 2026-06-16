import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { ContactForm, FormErrors } from '../types';

type Status = 'idle' | 'submitting' | 'success';

const empty: ContactForm = { name: '', email: '', subject: '', message: '' };

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'That email doesn’t look right.';
  }
  if (!form.subject.trim()) errors.subject = 'Add a short subject.';
  if (form.message.trim().length < 10) {
    errors.message = 'Tell me a little more (10+ characters).';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as the user fixes it
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    await new Promise((res) => setTimeout(res, 700));
    setStatus('success');
    setForm(empty);
  };

  if (status === 'success') {
    return (
      <section className="page container rise">
        <span className="eyebrow">// 08 — contact</span>
        <h1 className="page-title">Thanks — message sent</h1>
        <p className="lead">
          Appreciate you reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          className="btn btn-ghost"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </section>
    );
  }

  return (
    <section className="page container rise">
      <h1 className="page-title">Say hello</h1>
      <p className="lead">
        Questions, opportunities, or a good coffee-shop recommendation — all
        welcome.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            placeholder="Your name"
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="field__error">{errors.email}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <span className="field__error">{errors.subject}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            placeholder="A few words…"
          />
          {errors.message && (
            <span className="field__error">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message →'}
        </button>
      </form>
    </section>
  );
}
