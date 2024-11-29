import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const port = 3000;
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Client connected ${socket.id}`);

  io.emit("welcome", "welcome to saweria socket");

  socket.on("disconnect", () => {
    console.log(`Client disconnected ${socket.id}`);
  });
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello from server saweria socket");
});

app.post("/donation", (req, res) => {
  const data = req.body;
  console.log("new donation received", data);

  io.emit("newDonation", data);
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

