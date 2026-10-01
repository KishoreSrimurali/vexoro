"use client";

import type { FormEvent } from "react";

const SERVICES = ["Brand website", "Landing page", "Online store", "Web app", "SEO audit", "Care plan", "Not sure yet"];

/** Opens the visitor's email app with the enquiry filled in. */
export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const brand = String(d.get("brand") || "");
    const subject = `Project enquiry: ${d.get("type")}${brand ? ` (${brand})` : ""}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Brand or website: ${brand || "-"}`,
      `Service: ${d.get("type")}`,
      "",
      String(d.get("message")),
    ].join("\n");
    window.location.href = `mailto:hello@vexoro.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cf-brand">Brand or current website</label>
        <input id="cf-brand" name="brand" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-type">Service</label>
        <select id="cf-type" name="type" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="cf-msg">About the project</label>
        <textarea id="cf-msg" name="message" rows={5} placeholder="What you need, your deadline and a rough budget" required />
      </div>
      <div className="field-full form-foot">
        <button className="btn" type="submit">Send</button>
        <p className="form-hint">Opens your email app with the message filled in.</p>
      </div>
    </form>
  );
}
