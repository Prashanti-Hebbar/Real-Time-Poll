<!-- Animated Header -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=28&duration=3000&color=00F7FF&center=true&vCenter=true&width=800&lines=Real-Time+Polling+Application;Built+with+MERN+%2B+Socket.io;Create+•+Share+•+Vote+•+Live+Update" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render" />
  <img src="https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

---

# 📊 Real-Time Polling Application

> A full-stack **Real-Time Polling Web Application** that allows users to create polls, share links, and see live vote updates instantly using WebSockets.

---

## 🌍 Live Demo

🔗 **Frontend**  
👉 https://real-time-poll-kvhc.vercel.app/

---

# ✨ Features

## 📝 Poll Creation
- Create polls with a question  
- Add minimum 2 options  
- Auto-generate unique Poll ID  
- Store data securely in MongoDB  

---

## 🔗 Shareable Poll Links

```
https://real-time-poll-kvhc.vercel.app/poll-room/:pollId
```

✔ Anyone with the link can vote  
✔ Anyone can view live results  
✔ Fully cloud-hosted  

---

## ⚡ Real-Time Updates

Powered by **Socket.io**

- Instant vote updates  
- No page refresh required  
- Sync across tabs, browsers & devices  

---

## 🛡 Anti-Abuse Protection

### 🔐 Unique Voter ID
- UUID generated per browser  
- Stored in localStorage  
- Prevents duplicate votes  

### 🌐 IP Restriction
```js
req.headers["x-forwarded-for"] || req.socket.remoteAddress
```
- Blocks repeated votes from same IP  
- Reduces vote spamming  

---

# 🛠 Tech Stack

### 🖥 Frontend
<p>
  <img src="https://skillicons.dev/icons?i=react,vite,js,html,css" />
</p>

### ⚙ Backend
<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" />
</p>

### 🔌 Real-Time Engine
<p>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" height="50" />
</p>


---

# 📦 Local Setup

## 1️⃣ Clone Repository
```bash
git clone <your-repository-url>
cd Real-Time-Poll
```

## 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create `.env`:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run:
```bash
nodemon server.js
```

---

## 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Runs at:
```
http://localhost:5173
```

---

# 🔍 API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| POST   | /poll             | Create poll        |
| GET    | /poll/:id         | Get poll details   |
| POST   | /poll/:id/vote    | Vote in poll       |

---

# 🚧 Known Limitations

- IP restriction not 100% reliable  
- Incognito resets localStorage  
- No authentication  
- No rate limiting  

---

# 🔮 Future Improvements

- 🔑 JWT / Google Authentication  
- 🚦 Rate limiting  
- 📊 Analytics Dashboard  
- 🗳 Poll Expiration  
- 📈 Export Results (CSV/PDF)  

---

# 📊 Project Architecture

```
Client (React) 
   ↓
Express API (Node.js)
   ↓
MongoDB Atlas
   ↕
Socket.io (Real-Time Communication)
```

---

# 🎯 Project Status

✅ Production Deployed  
✅ Real-Time Sync  
✅ Persistent Storage  
✅ Anti-Abuse Protection  

---

# 👩‍💻 Author

**Prashanti Hebbar**  
Full Stack Developer | MERN Stack  

<p align="center" style="font-size: 28px;">
  Made with ❤️
</p>


---
