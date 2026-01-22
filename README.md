# Next.js Multi-Language App (JavaScript) + Intercepting Routes

A Next.js application built with **JavaScript**, featuring:
- **Multi-language (i18n)** routing
- **Intercepting routes** for modal/overlay navigation (App Router)
- Clean structure for scalable pages and translations

---

## ✨ Features

- **Multi-language support** (e.g., `/en`, `bn`)
- Locale-aware navigation and links
- **Intercepting routes** to open pages as modals (without losing the current page context)
- Works with **Next.js App Router**
- Easily extendable translation structure

---

## 🧱 Tech Stack

- **Next.js** (App Router)
- **JavaScript**
- i18n routing (locale segments)
- Intercepting routes (modal routes)

---

## 🌍 Multi-Language Routing (i18n)

This project supports multiple languages using locale segments in the URL:

Examples:
- `/en` → English homepage
- `/bn` → Bangla homepage

### Translation files
Translations are stored in `/app/dictionaries/`:

dictionaries/
en.json
bn.json


Example `dictionaries/en.json`:

  {
    "views": "Views",
    "share": "Share",
    "uploadedOn": "Uploaded On",
    "save": "Save",
    "followers": "Followers",
    "follow": "Follow"
  }

## 🧭 Middleware/Proxy (Locale Detection / Redirect)

Detect user preferred language (via headers)
Redirect / → /{defaultLocale}
Ensure invalid locale segments are handled safely

Typical flow:
User visits /
Middleware redirects to /en (or user default locale)

## 🪟 Intercepting Routes (Modal Navigation)
Intercepting routes allow opening a route as a modal overlay while preserving the current page in the background.

How it’s implemented
The main page route exists at: app/[lang]/photos/[id]/page.js
The intercepting route exists inside the modal slot: app/[locale]/@modal/(.)photos/[id]/page.js

This tells Next.js:
Render the photo page normally when navigated directly
Render the photo page inside the modal slot when navigated from within the app (depending on how links are set up)


▶️ Getting Started

1) Install dependencies - npm install
2) Run the dev server - npm run dev

Open: http://localhost:3000

👤 Author - Anaitullah