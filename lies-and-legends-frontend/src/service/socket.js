import React from "react";
import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";

const SOCKET_URL = "http://localhost:3000";

export const socket = socketio.connect(SOCKET_URL, {
	// transports: ["websocket"],
});
export const SocketContext = React.createContext();
