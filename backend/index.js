const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const { default: ShortUniqueId } = require("short-unique-id");

const httpServer = createServer();
const uid = new ShortUniqueId({ length: 6 });
const pid = new ShortUniqueId({ length: 8 });
var storage = { rooms: [] };

const io = new Server(httpServer, {
	cors: {
		origin: ["https://admin.socket.io", "http://localhost:5173"],
		credentials: true,
	},
});
io.on("connection", (socket) => {
	console.log(socket.id);
	socket.on("check", (first, sec) => {
		console.log(first, sec);
	});
	socket.on("create-a-room", (name) => {
		let newRoomId = uid.rnd();
		let roomObj = {
			roomId: newRoomId,
			gameInSession: false,
			players: [
				{
					id: pid.rnd(),
					name: name,
					admin: true,
					score: 0,
				},
			],
			//questions rand(15) when start
		};
		storage.rooms.push(roomObj);
		socket.join(newRoomId);
		socket.emit("created-room", roomObj);
	});
});

instrument(io, {
	auth: false,
	mode: "development",
});

httpServer.listen(3000);
