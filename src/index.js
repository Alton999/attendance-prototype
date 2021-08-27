import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CssBaseline } from "@material-ui/core";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";

const theme = createTheme({
    palette:{
        primary: {
          main: "#FFFFFF"
        },
        background: {
            default: "#2B2D2F"
        }
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
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

