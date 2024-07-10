import React from "react";
import styled from "styled-components";
const AuthenticationPageStyles = styled.div`
	min-height: 100vh;
	padding: 20px;
	.logo {
		margin: 0 auto 10px;
	}
	.heading {
		text-align: center;
		color: ${(props) => props.theme.primary};
		font-weight: 500;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.form {
		max-width: 600px;
		margin: 0 auto;
	}
	.have-account {
		display: flex;
		gap: 10px;
		align-items: center;
		span {
			font-weight: 500;
		}
	}
	.title {
		color: ${(props) => props.theme.primary};
		text-decoration: none;
	}
	.check-account {
		margin-top: 30px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;
const AuthenticationPage = ({ children }) => {
	return (
		<AuthenticationPageStyles>
			<div className="container">
				<img className="logo" srcSet="/logo.png 3x" alt="Logo"></img>
				<h2 className="heading">Monkey Blogging</h2>
				{children}
			</div>
		</AuthenticationPageStyles>
	);
};

export default AuthenticationPage;
