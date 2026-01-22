"use client";

import { useState } from "react";

type Props = {
  recipientEmail?: string;
};

export function ContactForm({ recipientEmail }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const to = recipientEmail ?? "";
    const subject = encodeURIComponent(`Contact from ${name || "your website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <form className="stack" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="card" role="group" aria-labelledby="contact-title">
        <div className="space-y-3">
          <h3 id="contact-title" className="section-title">Send me a message</h3>
          <p className="section-desc">
            I usually reply within 1–2 days. Fields marked * are required.
          </p>
        </div>

        <div className="stack" style={{ marginTop: 16 }}>
          <label className="label" htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
          />

          <label className="label" htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />

          <label className="label" htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="How can I help?"
          />

          <div>
            <button type="submit" className="button-link" aria-label="Send message">
              Send via email
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
