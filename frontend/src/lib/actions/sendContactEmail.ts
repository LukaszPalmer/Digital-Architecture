"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const callback = formData.get("callback") === "on";

    if (!name || !email || !service || !message) {
        return { success: false, error: "Pflichtfelder fehlen." };
    }

    try {
        await resend.emails.send({
            from: "Palmer Digital <kontakt@palmer-digital.de>",
            to: "kontakt@palmer-digital.de",
            replyTo: email,
            subject: `Neue Projektanfrage: ${service} — ${name}`,
            html: `
                <h2>Neue Projektanfrage</h2>
                <table>
                    <tr><td><strong>Name</strong></td><td>${name}</td></tr>
                    <tr><td><strong>E-Mail</strong></td><td>${email}</td></tr>
                    <tr><td><strong>Leistung</strong></td><td>${service}</td></tr>
                    ${phone ? `<tr><td><strong>Telefon</strong></td><td>${phone}</td></tr>` : ""}
                    <tr><td><strong>Rückruf</strong></td><td>${callback ? "Ja" : "Nein"}</td></tr>
                </table>
                <h3>Nachricht</h3>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        return { success: true };
    } catch {
        return { success: false, error: "E-Mail konnte nicht gesendet werden." };
    }
}
