import React, { useState } from "react";
import {
	Typography,
	Card,
	Container,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel
} from "@material-ui/core";

import useStyles from "./styles";

import Results from "../../Components/Results/Results";

const Home = () => {
	const classes = useStyles();
	const [attendanceType, setAttendanceType] = useState("");
	const handleChange = (e) => {
		setAttendanceType(e.target.value);
	};
	return (
		<div className={classes.componentContainer}>
			<Card className={classes.customCard}>
				<Typography variant="h3" align="center" gutterBottom color="primary">
					Student Attendance Organiser
				</Typography>
				<Container className={classes.marginContainer}>
					<Typography gutterBottom>
						Welcome to the attendance builder
					</Typography>
				</Container>
				<Container className={classes.marginContainer}>
					<Typography>(Instructions go here)</Typography>
				</Container>
				<Container
					className={classes.marginContainer}
					style={{ marginTop: "20px" }}
				>
					<div className={classes.inlineContainer}>
						<Typography
							variant="h6"
							style={{ marginRight: "20px" }}
							color="primary"
						>
							Which student identification are you using?
						</Typography>
						<FormControl component="fieldset">
							<RadioGroup
								row
								aria-label="Attendance type"
								name="Attendance Type"
								defaultValue="SID"
								value={attendanceType}
								onChange={handleChange}
							>
								<FormControlLabel
									value="SID"
									control={<Radio color="secondary" />}
									label="Student ID"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="Unikey"
									control={<Radio color="secondary" />}
									label="Unikey"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="Both"
									control={<Radio color="secondary" />}
									label="Both"
									labelPlacement="end"
								/>
							</RadioGroup>
						</FormControl>
						<div>{attendanceType}</div>
					</div>
				</Container>
				<Container className={classes.marginContainer}>
					<Results results="" />
				</Container>
			</Card>
		</div>
	);
};

export default Home;
