# 🧘‍♀️ Healthy Habit Tracker

## 🧾 Introduction

**Healthy Habit Tracker** is a simple and user-friendly web application that helps users build and maintain positive habits. It allows users to create custom habits, track their progress, and stay consistent over time. Designed for individuals aiming to improve their lifestyle through daily discipline, this app provides tools like notifications, weekly summaries, and toggle features to encourage habit formation.

---

## 📦 Project Type

**Frontend** (with Firebase Realtime Database as backend)

---

## 🌐 Deployed App

- **Frontend**: [https://deployed-site.whatever](https://fastidious-haupia-5c476e.netlify.app/)
- **Database**: [Firebase Realtime Database](https://console.firebase.google.com/u/0/project/health-tracker-f33d6/database/health-tracker-f33d6-default-rtdb/data)

---

## 🎥 Video Walkthroughs

- **Project & Codebase Walkthrough**: [_Video link](https://youtu.be/5zh1h8Gdf4A) 

---

## 📁 Directory Structure

habit-tracker/
├── public/
├── src/
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── pages/
│ ├── utils/
│ └── App.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json

---

## ✅ Features

- Add, edit, and delete habits
- Toggle habits to mark them complete/incomplete
- Toggle notification settings for reminders
- Weekly progress tracking & summary
- Responsive and clean UI built with Chakra UI

---

## 🛠 Design Decisions & Assumptions

- Firebase Realtime Database was used for fast and simple backend integration
- Chakra UI was chosen for rapid UI development and built-in responsiveness
- Notifications and weekly tracking logic is managed locally for now (can be extended via Firebase Cloud Functions in the future)
- Assumes a single user system; multi-user auth can be integrated as future enhancement

---

## 🧪 Installation & Getting Started

Make sure you have `pnpm` and Node.js installed.

```bash
pnpm install
pnpm dev

🧰 Usage
After launching the app:

Sign in with the provided credentials

Start adding your daily habits

Toggle completion status every day

Track your weekly progress on the dashboard

🔐 Credentials
For review purposes:

Email: random@gmail.com

Password: 123456

🌐 APIs Used
Firebase Realtime Database: for CRUD operations on habit data

Chakra UI: for building a responsive, accessible UI

⚙️ Technology Stack
React – JavaScript library for building UI

TypeScript – Static typing for scalable code

Chakra UI – Modular, accessible component library

Firebase Realtime Database – Backend-as-a-Service for real-time data syncing

React Router – Declarative routing for SPA

Context API – State management for auth and theme handling