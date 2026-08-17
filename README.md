# SkillSwap

**Trade Skills, Not Money.**

SkillSwap is an international skill-exchange platform where people teach what they know and learn what they want — no payment involved. Guitar lessons for coding help, photography tips for a language exchange — SkillSwap connects people who want to trade knowledge directly.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)

---

## ✨ Overview

SkillSwap reimagines learning as a two-way exchange. Instead of paying for courses or tutors, users list the skills they can teach and the skills they want to learn, then connect with a match — a true barter economy for knowledge.

This repository currently contains the **frontend** of the platform, built with a premium, modern dark-themed UI inspired by products like Linear, Vercel, and Raycast.

## 🖥️ Preview

The landing page features a video hero background, animated stats, and a floating glassmorphism navbar. The dashboard offers a full user experience — swap tracking, profile management, and messaging — all built on dummy data ahead of backend integration.

## 🚀 Features

- **Landing Page** — video hero background, animated badge & stats, features grid, skill categories, testimonials, FAQ accordion, and a live activity toast
- **Explore Page** — browsable skill listings with search, category filters, sorting, and individual skill detail pages
- **Pricing Page** — monthly/yearly toggle with tiered plans and an FAQ section
- **Auth Pages** — split-screen Login, Signup, and Forgot Password flows (UI complete, backend pending)
- **Dashboard** — sidebar navigation, overview stats, swap tracking, profile editor with live avatar/name sync, and a chat-style messaging panel
- **Fully Responsive** — dedicated mobile layouts across every page
- **Route-Grouped Layouts** — public pages and the dashboard use separate layouts, so navigation and footer only appear where they belong

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| State | React Context API |

**Planned backend:** Express.js, MongoDB + Mongoose, JWT authentication, Socket.io for real-time messaging.

## 📁 Project Structure

```
skillswap/
  src/
    app/
      (main)/        → public pages (landing, about, explore, pricing, contact, how-it-works)
      (auth)/        → login, signup, forgot-password
      dashboard/     → overview, my-swaps, profile, messages
    components/      → organized by feature (landing, dashboard, layout, effects, etc.)
    data/            → dummy data powering the UI ahead of backend integration
    context/         → shared app state (e.g. user profile)
```

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/muhammadmursal/skillswap.git
cd skillswap

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🗺️ Roadmap

- [x] Frontend UI — all core pages complete
- [ ] Backend API (Express.js + MongoDB)
- [ ] Real authentication (JWT)
- [ ] Real-time messaging (Socket.io)
- [ ] Skill matching & swap request logic
- [ ] Deployment

## 👤 Author

**Muhammad Mursal**
Frontend Developer, based in Faisalabad, Pakistan
GitHub: [@muhammadmursal](https://github.com/muhammadmursal)

---

*This project is under active development as part of a self-directed learning journey in frontend engineering.*