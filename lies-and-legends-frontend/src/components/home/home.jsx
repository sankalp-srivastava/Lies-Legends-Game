import { makeStyles, styled } from "@mui/styles";
import "./home.css";
import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { MuiOtpInput } from "mui-one-time-password-input";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { SocketContext } from "../../service/socket";

const useStyles = makeStyles({
	container: {
		display: "flex",
		color: "white",
		justifyContent: "space-around",
		alignItems: "center",
		minHeight: "94vh",
		backdropFilter: "blur(10px)",
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "1rem 2rem",
		gap: "1.5rem",
	},
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function CreateJoinDialog({ open, setOpen, roomId, setRoomId }) {
	//open ==1 for create and open ==2 for join
	const socket = useContext(SocketContext);
	const navigate = useNavigate();
	const [name, setName] = useState("");

	const handleChange = (newValue) => {
		setRoomId(newValue);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = () => {
		if (open == 1) socket.emit("create-a-room", name);
		else socket.emit("join-a-room", roomId, name);
	};
	const createRoomEvent = useCallback((obj) => {
		// navigate(`/play/${serverRoomId}`);
		console.log(`hello: `, obj);
	}, []);

	const roomError = useCallback((error) => {
		console.error("Error: ", error);
	}, []);

	useEffect(() => {
		// as soon as the component is mounted, do the following tasks:

		socket.emit("check", "hello", "sec");

		// subscribe to socket events
		socket.on("created-room", createRoomEvent);
		socket.on("joined-room", createRoomEvent);
		socket.on("room-error", roomError);

		return () => {
			socket.off("created-room", createRoomEvent);
			socket.off("join-a-room", createRoomEvent);
			socket.off("room-error", roomError);
		};
	}, [socket, createRoomEvent, roomError]);

	return (
		<div>
			<Dialog
				open={Boolean(open)}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				maxWidth="sm"
				fullWidth
				aria-describedby="dialogbox-create-or-join-room"
			>
				<DialogTitle>
					{open == 1 ? "Create a Room" : "Join a Room"}
				</DialogTitle>
				<DialogContent>
					<Box sx={{ pt: 3 }}>
						<Typography>Your Name</Typography>
						<TextField
							placeholder="Enter your name"
							fullWidth
							sx={{ mb: 2 }}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{open == 2 && (
							<>
								<Typography>Room ID</Typography>

								<MuiOtpInput
									value={roomId}
									onChange={handleChange}
									length={6}
								/>
							</>
						)}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
						color="secondary"
						variant="outlined"
					>
						Close
					</Button>
					<Button
						color="primary"
						variant="contained"
						onClick={handleClick}
					>
						{open == 1 ? "Create Room" : "Join Room"}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

function HomePage() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [roomId, setRoomId] = useState("");
	return (
		<div id="homepage">
			<CreateJoinDialog
				open={open}
				setOpen={setOpen}
				roomId={roomId}
				setRoomId={setRoomId}
			/>
			<div className={classes.container}>
				<Box
					sx={{ width: "44%", display: { xs: "none", md: "block" } }}
				>
					<Typography
						variant="h1"
						gutterBottom
						sx={{
							fontSize: "4rem",
							fontWeight: "Bold",
							wordBreak: "break-word",
						}}
					>
						Lies & Legends
					</Typography>
					<Typography
						variant="body1"
						sx={{ wordBreak: "break-word" }}
						// sx={{ fontSize: "4rem", fontWeight: "Bold" }}
					>
						Prepare to laugh, strategize, and outwit your pals as
						you uncover the truth amidst a web of clever lies
					</Typography>
				</Box>
				<Box sx={{ p: 0, overflow: "hidden" }}>
					<Typography
						variant="h1"
						align="center"
						gutterBottom
						sx={{
							fontSize: "3rem",
							fontWeight: "Bold",
							display: { md: "none" },
							wordBreak: "break-word",
						}}
					>
						Lies & Legends
					</Typography>
					<Typography
						align="center"
						gutterBottom
						variant="body1"
						sx={{
							display: { md: "none" },
							wordBreak: "break-word",
						}}
						// sx={{ fontSize: "4rem", fontWeight: "Bold" }}
					>
						Prepare to laugh, strategize, and outwit your pals as
						you uncover the truth amidst a web of clever lies
					</Typography>
					<Box sx={{ display: { md: "none" } }}>
						<div className={classes.buttonContainer}>
							<Button
								onClick={() => setOpen(1)}
								fullWidth
								sx={{
									width: "20rem",
									backgroundColor: "transparent",

									color: "white",
									border: "1.5px solid white",
									borderRadius: "9px",
									"&:hover": {
										backgroundColor: "white",
										color: "black",
										transition: "ease",
									},
								}}
							>
								Create A Room
							</Button>

							<Button
								onClick={() => setOpen(2)}
								fullWidth
								sx={{
									width: "20rem",
									backgroundColor: "transparent",

									color: "white",
									border: "1.5px solid white",
									borderRadius: "9px",
									"&:hover": {
										backgroundColor: "white",
										color: "black",
										transition: "ease",
									},
								}}
							>
								Join A Room
							</Button>
						</div>
					</Box>
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						<div className={classes.buttonContainer}>
							<Button
								onClick={() => setOpen(1)}
								sx={{
									width: "20rem",
									backgroundColor: "transparent",
									color: "white",
									border: "1.5px solid white",
									borderRadius: "9px",
									"&:hover": {
										backgroundColor: "white",
										color: "black",
										transition: "ease",
									},
								}}
							>
								Create A Room
							</Button>

							<Button
								onClick={() => setOpen(2)}
								sx={{
									width: "20rem",
									backgroundColor: "transparent",
									color: "white",
									border: "1.5px solid white",
									borderRadius: "9px",
									"&:hover": {
										backgroundColor: "white",
										color: "black",
										transition: "ease",
									},
								}}
							>
								Join A Room
							</Button>
						</div>
					</Box>
				</Box>
			</div>
		</div>
	);
}

export default HomePage;
