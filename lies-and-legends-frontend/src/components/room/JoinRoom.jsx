import React from "react";
import "./joinroom.css";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
	container: {
		color: "white",
		minHeight: "94vh",
		backdropFilter: "blur(10px)",
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "1rem 2rem",
		gap: "1.5rem",
	},
});

export default function JoinRoom(props) {
	const classes = useStyles();
	return (
		<div className="join-main">
			<Grid
				container
				spacing={1}
				sx={{ p: { xs: 2, md: 5 } }}
				className={classes.container}
			>
				<Grid item xs={12} md={6}>
					here is player page here shows the people present in the
					lobby
				</Grid>
				<Grid item xs={12} md={6}>
					<div>here is name window a box to type your nameq</div>
					<div>here is play button</div>
				</Grid>
			</Grid>
		</div>
	);
}
