"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function subscribeCareerNewsletter(formData: FormData) {
    const email = (formData.get("email") as string)?.trim();
    if (!email || !email.includes("@")) {
        return { success: false, error: "Bitte eine gültige E-Mail-Adresse eingeben." };
    }
    try {
        await resend.emails.send({
            from: "Palmer Digital <kontakt@palmer-digital.de>",
            to: "kontakt@palmer-digital.de",
            subject: `Career Newsletter — Neue Anmeldung: ${email}`,
            html: `<p style="font-family:monospace">Neue Career Newsletter Anmeldung:<br/><strong>${email}</strong></p>`,
        });
        return { success: true };
    } catch {
        return { success: false, error: "Fehler beim Abonnieren. Bitte erneut versuchen." };
    }
}
