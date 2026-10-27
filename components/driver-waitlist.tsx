"use client";

import type { FormEvent } from "react";

const APPS = ["Ola", "Uber", "Rapido", "More than one", "Other"];

/** RoadLens driver waitlist. Opens the visitor's email app with the details filled in. */
export function DriverWaitlist() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Area of Bengaluru: ${d.get("area")}`,
      `Drives for: ${d.get("app")}`,
      `Average km a day: ${d.get("km") || "-"}`,
    ].join("\n");
    window.location.href = `mailto:hello@vexoro.dev?subject=${encodeURIComponent("RoadLens driver waitlist")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" id="driver-waitlist" onSubmit={onSubmit} aria-label="RoadLens driver waitlist">
      <div className="field">
        <label htmlFor="dw-name">Name</label>
        <input id="dw-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="dw-phone">Phone</label>
        <input id="dw-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="field">
        <label htmlFor="dw-area">Area of Bengaluru</label>
        <input id="dw-area" name="area" type="text" placeholder="e.g. Whitefield" required />
      </div>
      <div className="field">
        <label htmlFor="dw-app">I drive for</label>
        <select id="dw-app" name="app" defaultValue={APPS[0]}>
          {APPS.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="dw-km">Average km a day (optional)</label>
        <input id="dw-km" name="km" type="number" min={0} inputMode="numeric" />
      </div>
      <div className="field-full form-foot">
        <button className="btn" type="submit">Join the waitlist</button>
        <p className="form-hint">Opens your email app with your details filled in.</p>
      </div>
    </form>
  );
}
