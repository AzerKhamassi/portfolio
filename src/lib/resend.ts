import { Resend } from "resend";

let client: Resend | null = null;

export function getResend() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");
  }
  return client;
}
