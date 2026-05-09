/**
 * SpineGuard Frontend Config
 * ─────────────────────────────────────────────────────────────
 * Edit this file to connect the frontend to your backend.
 *
 * After deploying the backend on Vercel you get a URL like:
 *   https://spineguard-api.vercel.app
 *
 * Paste that URL into API_BASE_URL below.
 * Paste your Pusher public key and cluster from the Pusher dashboard.
 */

window.SG_CONFIG = {

  // ── Backend API URL ──────────────────────────────────────────
  // Your deployed spineguard-api Vercel URL (no trailing slash)
  API_BASE_URL: 'https://spineguard-api.vercel.app',

  // ── Pusher (real-time) ───────────────────────────────────────
  // Pusher KEY is public — safe to put here
  // Get it from https://pusher.com → your app → App Keys
  PUSHER_KEY    : 'your_pusher_key_here',
  PUSHER_CLUSTER: 'eu',

};
