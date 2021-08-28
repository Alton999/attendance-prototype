import React, { useState } from "react";
import {
	Typography,
	Card,
	Button,
	Container,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel
} from "@material-ui/core";

import styled from "@emotion/styled";

const ComponentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const CustomCard = styled(Card)`
	width: 90%;
	padding: 1em;
	height: 80vh;
`;

const MarginContainer = styled(Container)`
	margin: 10px;
`;

const InlineContainer = styled.div`
	display: inline-flex;
	jusitfy-content: space-between;
`;

const ResultsContainer = styled.div``;
const Home = () => {
	const [attendanceType, setAttendanceType] = useState("");
	const handleChange = (e) => {
		setAttendanceType(e.target.value);
	};
	return (
		<ComponentContainer>
			<CustomCard>
				<Typography variant="h3" align="center" gutterBottom>
					Student Attendance Organiser
				</Typography>
				<MarginContainer>
					<Typography gutterBottom>
						Welcome to the attendance builder
					</Typography>
				</MarginContainer>
				<MarginContainer>
					<Typography>(Instructions go here)</Typography>
				</MarginContainer>
				<MarginContainer style={{ marginTop: "20px" }}>
					<InlineContainer>
						<Typography variant="h6" style={{ marginRight: "20px" }}>
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
					</InlineContainer>
				</MarginContainer>
				<MarginContainer>
					<Typography>Results:</Typography>
				</MarginContainer>
			</CustomCard>
		</ComponentContainer>
	);
};

export default Home;
