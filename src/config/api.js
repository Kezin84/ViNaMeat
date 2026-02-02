// src/config/api.js
export const API_URL = 'https://script.google.com/macros/s/AKfycby378mxwj4c8vCDNMXw0zYYgK05BA1E-eh-iH9x13X4T0UKpCi-lRI0RC_PyqFy9qjFkQ/exec'

export const IMGBB_KEY = 'b202a4bdc79bf1dc72f6f6ded6b74501'

// Helper functions (optional)
export async function fetchAPI(action, options = {}) {
  const res = await fetch(`${API_URL}?action=${action}`, options)
  return res.json()
}

export async function postAPI(data) {
  return fetch(API_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}