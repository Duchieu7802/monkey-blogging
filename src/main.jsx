import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./utils/constants.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={theme}>
		<GlobalStyles></GlobalStyles>
		<BrowserRouter>
			<App />
			<ToastContainer></ToastContainer>
		</BrowserRouter>
	</ThemeProvider>
);
