import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#421B13",
			light: "#964735"
		},
		secondary: {
			main: "#FF7A5C"
		},
		background: {
			default: "#FEF2EF"
		}
	},
	typography: {
		fontFamily: ["Lato"].join(",")
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					margin: "0",
					padding: "0"
				}
			}
		}
	}
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
