"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type LeadFormState } from "@/app/actions";

const initialState: LeadFormState = { success: false, message: "" };

const BUDGET_OPTIONS = [
  "Under $5k / month",
  "$5k – $15k / month",
  "$15k – $50k / month",
  "$50k+ / month",
  "Not sure yet",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-none transition-opacity hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitLead, initialState);

  return (
    <div>
      {state.success ? (
        <div className="rounded-lg border border-border bg-white p-6">
          <p className="text-sm font-semibold text-success">Message sent</p>
          <p className="mt-1 text-sm text-muted">{state.message}</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Jane Smith"
              />
              {state.errors?.name && (
                <p className="mt-1.5 text-xs text-danger">
                  {state.errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="jane@company.com"
              />
              {state.errors?.email && (
                <p className="mt-1.5 text-xs text-danger">
                  {state.errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-ink"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your brand"
              />
              {state.errors?.company && (
                <p className="mt-1.5 text-xs text-danger">
                  {state.errors.company}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-ink"
              >
                Monthly budget
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue={BUDGET_OPTIONS[0]}
                className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="goals"
              className="block text-sm font-medium text-ink"
            >
              Campaign goals
            </label>
            <textarea
              id="goals"
              name="goals"
              rows={4}
              className="mt-1.5 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="What are you looking to achieve — awareness, launches, ongoing UGC, something else?"
            />
            {state.errors?.goals && (
              <p className="mt-1.5 text-xs text-danger">
                {state.errors.goals}
              </p>
            )}
          </div>

          {!state.success && state.message && (
            <p className="text-sm text-danger">{state.message}</p>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
