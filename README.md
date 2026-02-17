📊 Real-Time Polling Application

A full-stack Real-Time Polling Web Application where users can create polls, share them via a link, and view live vote updates instantly using WebSockets.

Built using the MERN Stack + Socket.io

🌍 Live Deployment

🌐 Frontend (Vercel)
👉 https://real-time-poll-kvhc.vercel.app/

🚀 Backend (Render)
👉 Hosted on Render

🗄 Database (MongoDB Atlas)
👉 Cloud-hosted MongoDB

🚀 Features
✅ 1. Poll Creation

Users can:

Create a poll with a question

Add minimum 2 options

Store poll data in MongoDB

Generate a unique Poll ID automatically

✅ 2. Shareable Links

Each poll generates a unique URL:

https://real-time-poll-kvhc.vercel.app/poll-room/:pollId


✔ Users can copy and share the link
✔ Anyone with the link can vote
✔ Anyone can view real-time results

✅ 3. Real-Time Result Updates

Implemented using Socket.io

When a user votes:

Vote count updates instantly

All connected users in that poll room see updates

No page refresh required

Real-time synchronization works across:

Multiple tabs

Multiple browsers

Multiple devices

✅ 4. Fairness / Anti-Abuse Mechanisms

Your project includes two layered fairness protections:

🔐 1️⃣ Unique Voter ID Restriction

Each browser generates a UUID

Stored in localStorage

After voting:

voterId is saved in MongoDB

Same browser cannot vote again

Prevents:

Multiple votes from the same browser

🌐 2️⃣ IP Address Restriction

Backend captures:

req.headers["x-forwarded-for"] || req.socket.remoteAddress


IP address is stored in the poll document

If same IP tries to vote again → request blocked

Prevents:

Multiple votes from same network

Basic vote spamming

🛡 Together These Mechanisms Reduce:

✔ Multiple votes from same browser
✔ Multiple votes from same IP
✔ Basic automated vote abuse

✅ 5. Persistent Data Storage

Using MongoDB Atlas

Stored data includes:

Question

Options

Vote counts

Voter IDs

IP addresses

Created timestamp

✔ Data persists after server restart
✔ Polls remain accessible via link
✔ Fully cloud-based storage

🛠 Tech Stack
🖥 Frontend

React (Vite)

React Router

Axios

Socket.io Client

⚙ Backend

Node.js

Express.js

MongoDB (Mongoose)

Socket.io

🚀 Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

📦 Local Installation
1️⃣ Clone Repository
git clone <your-repository-url>
cd Real-Time-Poll

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run backend:

nodemon server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔍 API Endpoints
Method	Endpoint	Description
POST	/poll	Create a poll
GET	/poll/:id	Get poll details
POST	/poll/:id/vote	Vote in a poll
⚠️ Edge Cases Handled

✔ Poll must have minimum 2 options
✔ Invalid poll ID returns 404
✔ Invalid option index is rejected
✔ Duplicate vote (same voterId) blocked
✔ Duplicate vote (same IP) blocked
✔ Real-time sync across multiple users
✔ CORS configured properly for production
✔ Environment-based PORT handling

🚧 Known Limitations

⚠ IP-based restriction is not 100% reliable

Users behind same WiFi share IP

VPN users can bypass IP restriction

⚠ Incognito mode generates new voterId

localStorage resets

⚠ No authentication system

Users are anonymous

⚠ No rate limiting

API can be spammed

🔮 Future Improvements

🔑 Add authentication (JWT / Google Login)

🧠 Device fingerprinting for stronger anti-abuse

🚦 Rate limiting (express-rate-limit)

📊 Poll analytics dashboard

🗳 Poll expiration time

📱 Enhanced mobile UX

🔒 HTTPS-only cookie-based vote tracking

📈 Poll result export (CSV/PDF)

🎯 Project Status

✔ Poll creation
✔ Shareable links
✔ Real-time updates
✔ Fairness mechanisms
✔ Persistent database storage
✔ Production deployment

👩‍💻 Author

Prashanti Hebbar
Full Stack Developer | MERN Stack
