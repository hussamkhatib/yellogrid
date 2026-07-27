"use server";

export type LeadFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "company" | "goals", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const goals = String(formData.get("goals") ?? "").trim();

  const errors: LeadFormState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (!company) errors.company = "Please enter your company name.";
  if (!goals) errors.goals = "Tell us a bit about your campaign goals.";

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the highlighted fields and try again.",
      errors,
    };
  }

  // TODO: wire this up to email/CRM delivery (e.g. Resend, HubSpot) once available.
  console.log("New YelloGrid lead:", { name, email, company, budget, goals });

  return {
    success: true,
    message:
      "Thanks — your message is in. We'll be in touch within 1–2 business days.",
  };
}
