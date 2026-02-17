import { io } from 'socket.io-client';
const socket = io('https://real-time-poll-tn0x.onrender.com',{
    transports: ["websocket"],
    withCredentials: true
});

export default socket;