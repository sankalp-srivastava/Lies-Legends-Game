import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import JoinRoom from "./components/room/JoinRoom";
import { SocketContext, socket } from "./service/socket";
function App() {
	return (
		<SocketContext.Provider value={socket}>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/join" element={<JoinRoom />} />
			</Routes>
		</SocketContext.Provider>
	);
}

export default App;
