📊 Real-Time Polling Application

A full-stack Real-Time Polling Web Application where users can create polls, share them via a link, and view live vote updates instantly using WebSockets.

Built using the MERN stack + Socket.io and deployed with:

🌐 Frontend → Vercel

🚀 Backend → Render

🗄 Database → MongoDB Atlas

🚀 Features
✅ 1. Poll Creation

Users can create a poll with:

A question

Minimum 2 options

Poll is stored in MongoDB

Unique Poll ID is generated automatically

✅ 2. Shareable Links

Each poll has a unique URL:

https://real-time-poll-kvhc.vercel.app/

Users can copy and share this link.

Anyone with the link can vote and see results.

✅ 3. Real-Time Result Updates

Implemented using Socket.io

When one user votes:

Vote count updates instantly

All connected users in the poll room see live updates

No page refresh required

✅ 4. Fairness / Anti-Abuse Mechanisms

Your project includes two fairness mechanisms:

🔐 1. Unique Voter ID Restriction

Each browser generates a UUID stored in localStorage

Once a voter votes:

Their voterId is stored in the poll document

They cannot vote again using the same browser

🌐 2. IP Address Restriction

Backend captures:

req.headers["x-forwarded-for"] || req.socket.remoteAddress


IP is stored in the poll document

If the same IP tries to vote again → request blocked

Together these reduce:

Multiple votes from same browser

Repeated votes from same IP

✅ 5. Persistent Data Storage

MongoDB Atlas stores:

Question

Options

Vote counts

Voter IDs

IP addresses

Data persists even after server restart

Polls remain accessible via link

🛠 Tech Stack
Frontend

React (Vite)

React Router

Axios

Socket.io Client

Backend

Node.js

Express.js

MongoDB (Mongoose)

Socket.io

Deployment

Vercel (Frontend)

Render (Backend)

MongoDB Atlas (Database)

📦 Installation (Local Setup)
1️⃣ Clone Repository
git clone <repo-url>
cd Real-Time-Poll

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run server:

nodemon server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔍 API Endpoints
Create Poll
POST /poll

Get Poll
GET /poll/:id

Vote
POST /poll/:id/vote

⚠️ Edge Cases Handled

✔ Poll must have minimum 2 options
✔ Invalid poll ID returns 404
✔ Invalid option index is rejected
✔ Duplicate vote (same voterId) is blocked
✔ Duplicate vote (same IP) is blocked
✔ Real-time sync across multiple users
✔ CORS configured for production

🚧 Known Limitations

IP-based restriction is not 100% reliable

Users behind same WiFi share IP

VPN users can bypass IP restriction

Incognito mode can generate new voterId

localStorage is cleared in incognito

No authentication system

Users are anonymous

No rate limiting

API could be spammed

🔮 Future Improvements

🔑 Add authentication (JWT / Google Login)

🧠 Use device fingerprinting for stronger anti-abuse

🚦 Add rate limiting (express-rate-limit)

📊 Add analytics dashboard for poll creator

🗳 Add poll expiration time

📱 Improve mobile UX

🔒 Add HTTPS-only cookie based vote tracking

🎯 Project Status

✅ Poll creation
✅ Shareable links
✅ Real-time updates
✅ Fairness mechanisms
✅ Persistent database storage
✅ Deployed and production ready

👩‍💻 Author

Prashanti Hebbar
Full Stack Developer | MERN Stack
