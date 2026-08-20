import { z } from "zod";
import { CONTACT_REASONS } from "@/lib/site-data";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  organisation: z.string().trim().optional(),
  reason: z.enum(CONTACT_REASONS, { message: "Please select a reason for contacting us." }),
  message: z.string().trim().min(10, "Please share a few more details in your message."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// No email/CRM backend is connected yet. This is the single seam to replace
// with a real integration (e.g. a TanStack server function or hosted form API).
export async function submitContactForm(_values: ContactFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
}
