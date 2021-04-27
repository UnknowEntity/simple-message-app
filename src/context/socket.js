import React from "react";
import socketio from "socket.io-client";

export const socket = socketio("http://localhost:3000/message", {
  withCredentials: true,
});

export const SocketContext = React.createContext();
