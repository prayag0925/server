# 🚀 Custom Server Builder

> A Node.js HTTP server built from scratch — no Express, no shortcuts. Just pure Node.js magic! ⚡

---

## 📌 Project Overview

| Detail | Info |
|--------|------|
| 🎯 **Objective** | Build a custom HTTP server using Node.js built-in `http` module |
| ⏳ **Duration** | 2–3 Hours |
| 🏆 **Marks** | 10/10 |
| 📦 **Module Used** | `http`, `url` (No Express.js!) |

---

## 🗂️ Project Structure

```
final-server/
├── 📄 server.js          → Main server file
└── 📁 routes/
    ├── 🏠 home.js        → Home route
    ├── 👤 about.js       → About route
    ├── 📞 contact.js     → Contact route
    ├── 👥 user.js        → Query parameter route
    └── ❌ notFound.js    → 404 Error handling
```

---

## 🧩 Features

### 🔗 Step 1 — HTTP Server
- Built using Node.js built-in `http` module
- Runs on **Port 3000**
- No frameworks used!

### 📬 Step 2 — Route Handling
| Route | Description |
|-------|-------------|
| `/` | 🏠 Home Page |
| `/about` | 👤 About Page |
| `/contact` | 📞 Contact Page |
| `/user` | 👥 User Page |
| `*` | ❌ 404 Not Found |

### ⚡ Step 3 — Response Types
- ✅ **HTML** response
- ✅ **JSON** response
- ✅ **Plain Text** response

### ⚡ Step 4 — Query Parameters
```
http://localhost:3000/user?name=Rahul
```
➡️ Output: **Hello, Rahul!**

```
http://localhost:3000/user
```
➡️ Output: **Hello, Guest!**

### 🗂️ Step 5 — Status Codes
| Code | Meaning | Used When |
|------|---------|-----------|
| `200` | ✅ Success | Valid route |
| `404` | ❌ Not Found | Wrong route |

---

## ▶️ How to Run

**Step 1: Clone the repo**
```bash
git clone https://github.com/your-username/final-server.git
```

**Step 2: Folder ma jao**
```bash
cd final-server
```

**Step 3: Server start karo**
```bash
node server.js
```

**Step 4: Browser ma open karo**
```
http://localhost:3000
```

---

## 🌐 All Routes Test karo

| URL | Output |
|-----|--------|
| `http://localhost:3000/` | 🏠 Home Page |
| `http://localhost:3000/about` | 👤 About Page |
| `http://localhost:3000/contact` | 📞 Contact Page |
| `http://localhost:3000/user?name=Rahul` | 👋 Hello, Rahul! |
| `http://localhost:3000/user` | 👋 Hello, Guest! |
| `http://localhost:3000/xyz` | ❌ 404 Not Found |

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/home.png)

### 👤 About Page
![About Page](./screenshots/about.png)

### 📞 Contact Page
![Contact Page](./screenshots/contact.png)

### 👥 User Query Page
![User Page](./screenshots/user.png)

### ❌ 404 Not Found
![Not Found Page](./screenshots/notfound.png)

---

## 👨‍💻 Author

Made with ❤️ by **prayag patel**
