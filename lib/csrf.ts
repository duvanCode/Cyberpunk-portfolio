import { createHmac, randomBytes } from "crypto"

const CSRF_SECRET = process.env.CSRF_SECRET || "fallback-secret-change-in-production"
const TOKEN_EXPIRY_MS = 60 * 60 * 1000 // 1 hour

/**
 * Generates a CSRF token with embedded timestamp
 * Format: timestamp.signature
 */
export function generateCsrfToken(): string {
  const timestamp = Date.now().toString()
  const random = randomBytes(16).toString("hex")
  const data = `${timestamp}.${random}`
  const signature = createHmac("sha256", CSRF_SECRET).update(data).digest("hex")
  return `${data}.${signature}`
}

/**
 * Validates a CSRF token
 * Checks signature integrity and expiration
 */
export function validateCsrfToken(token: string): boolean {
  if (!token || typeof token !== "string") {
    return false
  }

  const parts = token.split(".")
  if (parts.length !== 3) {
    return false
  }

  const [timestamp, random, signature] = parts

  // Verify timestamp is valid
  const tokenTime = parseInt(timestamp, 10)
  if (isNaN(tokenTime)) {
    return false
  }

  // Check expiration
  if (Date.now() - tokenTime > TOKEN_EXPIRY_MS) {
    return false
  }

  // Verify signature
  const data = `${timestamp}.${random}`
  const expectedSignature = createHmac("sha256", CSRF_SECRET).update(data).digest("hex")

  // Timing-safe comparison
  if (signature.length !== expectedSignature.length) {
    return false
  }

  let result = 0
  for (let i = 0; i < signature.length; i++) {
    result |= signature.charCodeAt(i) ^ expectedSignature.charCodeAt(i)
  }

  return result === 0
}
