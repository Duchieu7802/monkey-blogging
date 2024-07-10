import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button";
const NotFoundPageStyles = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.logo {
		margin-bottom: 20px;
	}
	.title {
		margin-bottom: 20px;
	}
`;
const NotFoundPage = () => {
	return (
		<NotFoundPageStyles>
			<NavLink to="/">
				<img srcSet="/logo.png 3x" alt="Monkey-blogging" className="logo" />
			</NavLink>
			<h1 className="title">Oops! Page not found</h1>
			<NavLink to="/">
				<Button type="button">Back to home</Button>
			</NavLink>
		</NotFoundPageStyles>
	);
};

export default NotFoundPage;
