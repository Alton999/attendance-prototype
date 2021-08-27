import React from "react";
import styled from '@emotion/styled'

import { Paper, Button } from "@material-ui/core";

const CustomButton = styled(Button)`
	padding: 32px;
	background-color: hotpink;
	font-size: 24px;
	border-radius: 4px;
	color: black;
	font-weight: bold;
	&:hover {
		color: white;
	}
`

const Home = () => {
	return <div>
		<Paper elevation={3}>
			<h1>Hello World!</h1>
			<p>This is my first React App.</p>
			<CustomButton>Click me</CustomButton>
		</Paper>
	</div>;
};

export default Home;
