import { Resend } from "npm:resend@4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, subject, message } = await req.json();

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Ungültiger Name" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@") || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Ungültige Nachricht" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const subjectLine = subject?.trim()
      ? `Kontaktanfrage: ${subject.trim()}`
      : `Neue Kontaktanfrage von ${name.trim()}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #a0758a; border-bottom: 2px solid #f0c4d4; padding-bottom: 10px;">
          Neue Kontaktanfrage
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #333;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">E-Mail:</td>
            <td style="padding: 8px 0; color: #333;">
              <a href="mailto:${email.trim()}" style="color: #a0758a;">${email.trim()}</a>
            </td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Telefon:</td>
            <td style="padding: 8px 0; color: #333;">${phone.trim()}</td>
          </tr>` : ""}
          ${subject ? `<tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Betreff:</td>
            <td style="padding: 8px 0; color: #333;">${subject.trim()}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 20px;">
          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Nachricht:</p>
          <div style="background: #f9f0f3; padding: 15px; border-radius: 8px; color: #333; white-space: pre-wrap; line-height: 1.6;">
            ${message.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}
          </div>
        </div>
        <p style="margin-top: 20px; color: #999; font-size: 12px;">
          Diese E-Mail wurde über das Kontaktformular auf pomeranianzucht-sachsen-anhalt.de gesendet.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: ["info@pomeranianzucht-sachsen-anhalt.de"],
      reply_to: email.trim(),
      subject: subjectLine,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Interner Serverfehler" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
