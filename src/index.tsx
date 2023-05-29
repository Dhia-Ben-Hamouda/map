import React from "react";
import ReactDom from "react-dom/client";
import { createTheme , ThemeProvider } from "@mui/material";
import App from "./App";
import "./styles.scss";

const root = ReactDom.createRoot( document.getElementById("root") as HTMLElement );
const theme = createTheme({
    palette:{
        primary:{
            main:"#ffae2c"
        }
    }
})

root.render(
    <ThemeProvider theme={theme} >
        <App/>
    </ThemeProvider>
)