const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//create HTTP server
const server = http.createServer(app);

//setup socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", //frontend URL
    methods: ["GET", "POST"],
  },
});

//make io accessible in roots
app.set("io", io);

//Socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinPoll", (pollId) => {
    console.log("Joined poll room:", pollId);
    socket.join(pollId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

//Routes
app.use("/poll", require("./routes/pollRoutes"));

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
