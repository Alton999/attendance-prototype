import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const Results = (results) => {
	const classes = useStyles();

	return (
		<>
			<Typography variant="h6" color="primary">
				Results
			</Typography>
			<div className={classes.resultsContainer}></div>
		</>
	);
};

export default Results;
