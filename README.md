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
<img width="1920" height="918" alt="Screenshot 2026-04-29 111104" src="https://github.com/user-attachments/assets/cee930c2-0c83-48b4-a11a-a72b8c80d894" />


### 👤 About Page
<img width="1920" height="915" alt="Screenshot 2026-04-29 111122" src="https://github.com/user-attachments/assets/b90d2ecf-42ad-4805-a73a-6a9d99e4978c" />


### 📞 Contact Page
<img width="1920" height="915" alt="Screenshot 2026-04-29 111053" src="https://github.com/user-attachments/assets/1466bb97-ca99-494b-a49d-1bd0c0d0ffcd" />


### 👥 User Query Page
<img width="1920" height="922" alt="Screenshot 2026-04-30 101236" src="https://github.com/user-attachments/assets/a3f6bbcf-170f-49a6-a590-796943e1c6db" />


### ❌ 404 Not Found
<img width="1920" height="921" alt="Screenshot 2026-04-29 111153" src="https://github.com/user-attachments/assets/2f62f7e2-9e97-44f9-b822-8b5b673c583b" />


---

## 👨‍💻 Author

Made with ❤️ by **prayag patel**
