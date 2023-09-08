import { makeStyles, styled } from "@mui/styles";
import "./home.css";
import { Box, Button, Typography } from "@mui/material";

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
		padding: "1rem 2rem",
		gap: "1.5rem",
	},
});

function HomePage() {
	const classes = useStyles();
	return (
		<div id="homepage">
			<div className={classes.container}>
				<Box
					sx={{ width: "44%", display: { xs: "none", md: "block" } }}
				>
					<Typography
						variant="h1"
						gutterBottom
						sx={{ fontSize: "4rem", fontWeight: "Bold" }}
					>
						Lies & Legends
					</Typography>
					<Typography
						variant="body1"

						// sx={{ fontSize: "4rem", fontWeight: "Bold" }}
					>
						Prepare to laugh, strategize, and outwit your pals as
						you uncover the truth amidst a web of clever lies
					</Typography>
				</Box>
				<Box sx={{ p: 6 }}>
					<Typography
						variant="h1"
						align="center"
						gutterBottom
						sx={{
							fontSize: "3rem",
							fontWeight: "Bold",
							display: { md: "none" },
						}}
					>
						Lies & Legends
					</Typography>
					<Typography
						align="center"
						gutterBottom
						variant="body1"
						sx={{ display: { md: "none" } }}
						// sx={{ fontSize: "4rem", fontWeight: "Bold" }}
					>
						Prepare to laugh, strategize, and outwit your pals as
						you uncover the truth amidst a web of clever lies
					</Typography>
					<Box sx={{ display: { md: "none" } }}>
						<div className={classes.buttonContainer}>
							<Button
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
								sx={{
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
								sx={{
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
