# Manage My Tabs – Smart Browser Session Manager

A lightweight Chrome extension that helps users **save, organize, and restore browsing sessions instantly**.

Built for students, developers, and researchers who regularly work with multiple tabs and need a fast way to manage their workspace.

---

## 🚨 Problem

Modern browsing often leads to:

* Dozens of open tabs across different tasks
* Loss of important sessions due to shutdown or crashes
* Time wasted reopening resources manually from history
* No proper way to organize study or work environments

Chrome’s default session restore is not enough for structured workflows like study sessions, coding setups, or research work.

---

## 💡 Solution

**Manage My Tabs** solves this by turning your browser into a workspace manager:

* Save all open tabs as a named session
* Organize multiple sessions (Study, Projects, Research, etc.)
* Restore full browsing environments with one click
* Keep everything stored locally in the browser

No backend. No login. No complexity — just productivity.

---

## ✨ Features

* 📌 Save all active tabs as a session
* 🔄 Restore complete sessions instantly
* 🗂 Multiple workspace/session support
* 💾 Local storage (fast and offline)
* 🖱 Simple and intuitive popup interface
* ⚡ Lightweight Chrome extension (Manifest V3)

---

## 🧑‍💻 Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* Chrome Extensions API

  * Tabs API
  * Storage API
  * Manifest V3 Service Worker

---

## 📸 Preview

> Add screenshots here (recommended for portfolio)

* Create Session UI
* Session Vault UI
* Restore Flow Demo

---

## ⚙️ How It Works

1. The extension reads all active tabs using Chrome Tabs API
2. Stores tab URLs and titles in Chrome local storage
3. Displays saved sessions inside the popup UI
4. Restores sessions by reopening all saved URLs in new tabs

---

## 🚀 Installation (Developer Mode)

1. Clone this repository:

```bash
git clone https://github.com/your-username/manage-my-tabs.git
```

2. Open Chrome:

```
chrome://extensions/
```

3. Enable **Developer Mode** (top right)

4. Click **Load Unpacked**

5. Select the project folder

6. Start using **Manage My Tabs** 🎉

---

## 📁 Project Structure

```
manage-my-tabs/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── background/
│   └── background.js
└── icons/
```

---

## 🎯 Future Improvements

* 🔍 Search saved sessions
* 📤 Export / import sessions (JSON)
* ⏱ Auto-save workspace every few minutes
* ☁️ Cloud sync with backend (NestJS / MongoDB)
* 🔐 User authentication system

---

## 👨‍🎓 Why This Project Matters

This project demonstrates practical skills in:

* Chrome Extension development (Manifest V3)
* Browser APIs (Tabs + Storage)
* State management in frontend apps
* Real-world productivity tool design
* Building deployable developer tools

---

## 🧠 Author

Built by a student developer (Pragyan Thapaliya) focused on full-stack development, productivity tools, and real-world projects.

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to fork or improve it.

---
