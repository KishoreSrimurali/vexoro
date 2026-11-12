"use client";

import type { FormEvent } from "react";

const USES = ["Doctor and lab bookings", "Home services and repairs", "Customer care, refunds and cancellations", "Calls for my parents", "Calls for my business", "Something else"];
const WHO = ["Just me", "My family", "My clinic or business"];

/** Project Z beta waitlist. Opens the visitor's email app with the details filled in. */
export function BetaWaitlist() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `City: ${d.get("city")}`,
      `Languages: ${d.get("languages") || "-"}`,
      `For: ${d.get("who")}`,
      `Calls I'd hand over first: ${d.get("use")}`,
    ].join("\n");
    window.location.href = `mailto:ceo@vexoro.dev?subject=${encodeURIComponent("Project Z beta waitlist")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" id="beta-waitlist" onSubmit={onSubmit} aria-label="Project Z beta waitlist">
      <div className="field">
        <label htmlFor="bw-name">Name</label>
        <input id="bw-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="bw-phone">Phone</label>
        <input id="bw-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="field">
        <label htmlFor="bw-city">City</label>
        <input id="bw-city" name="city" type="text" autoComplete="address-level2" placeholder="e.g. Bengaluru" required />
      </div>
      <div className="field">
        <label htmlFor="bw-languages">Languages you need (optional)</label>
        <input id="bw-languages" name="languages" type="text" placeholder="e.g. Kannada, Tamil" />
      </div>
      <div className="field">
        <label htmlFor="bw-who">It&apos;s for</label>
        <select id="bw-who" name="who" defaultValue={WHO[0]}>
          {WHO.map((w) => <option key={w}>{w}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="bw-use">Calls I&apos;d hand over first</label>
        <select id="bw-use" name="use" defaultValue={USES[0]}>
          {USES.map((u) => <option key={u}>{u}</option>)}
        </select>
      </div>
      <div className="field-full form-foot">
        <button className="btn" type="submit">Join the beta waitlist</button>
        <p className="form-hint">Opens your email app with your details filled in.</p>
      </div>
    </form>
  );
}
