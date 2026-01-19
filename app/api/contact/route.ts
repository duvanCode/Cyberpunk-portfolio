import { NextRequest, NextResponse } from "next/server"
import { validateCsrfToken } from "@/lib/csrf"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

interface ContactFormData {
  name: string
  email: string
  message: string
  csrfToken: string
}

async function sendTelegramMessage(text: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Telegram credentials not configured")
    return false
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Telegram API error:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Failed to send Telegram message:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, message, csrfToken } = body

    // Validate CSRF token
    if (!csrfToken || !validateCsrfToken(csrfToken)) {
      return NextResponse.json(
        { error: "Token de seguridad inválido" },
        { status: 403 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // Sanitize inputs for Telegram HTML
    const sanitize = (str: string) =>
      str.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c))

    // Format message for Telegram
    const telegramMessage = `
<b>Nuevo mensaje de contacto</b>

<b>Nombre:</b> ${sanitize(name)}
<b>Email:</b> ${sanitize(email)}

<b>Mensaje:</b>
${sanitize(message)}
    `.trim()

    // Send to Telegram
    const sent = await sendTelegramMessage(telegramMessage)

    if (!sent) {
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intenta más tarde." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
