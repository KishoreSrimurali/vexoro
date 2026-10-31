"use client";

import type { FormEvent } from "react";

const SERVICES = ["Investing in RoadLens", "Partnership or data buying", "Driving with RoadLens", "AI solution", "Brand website", "Landing page", "Online store", "Web app", "SEO audit", "Something else"];

/** Opens the visitor's email app with the enquiry filled in. */
export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const brand = String(d.get("brand") || "");
    const subject = `Enquiry: ${d.get("type")}${brand ? ` (${brand})` : ""}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Company or website: ${brand || "-"}`,
      `Topic: ${d.get("type")}`,
      "",
      String(d.get("message")),
    ].join("\n");
    window.location.href = `mailto:ceo@vexoro.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
        <label htmlFor="cf-brand">Company or website</label>
        <input id="cf-brand" name="brand" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-type">Topic</label>
        <select id="cf-type" name="type" defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" name="message" rows={5} placeholder="What you have in mind, and any timeline or budget" required />
      </div>
      <div className="field-full form-foot">
        <button className="btn" type="submit">Send</button>
        <p className="form-hint">Opens your email app with the message filled in.</p>
      </div>
    </form>
  );
}
