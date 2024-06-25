import { styled } from "styled-components";
const SignUpPage = () => {
	const SignUpPage = styled.div`
		min-height: 100vh;
		padding: 40px;
		.logo {
			margin: 0 auto 20px;
		}
		.heading {
			text-align: center;
			color: ${(props) => props.theme.primary};
			font-weight: 500;
			font-size: 30px;
			margin-bottom: 60px;
		}
		.form {
			max-width: 600px;
			margin: 0 auto;
		}
		.field {
			display: flex;
			flex-direction: column;
			row-gap: 20px;
			align-items: flex-start;
		}
		.label {
			color: ${(props) => props.theme.grayDark};
			font-size: 20px;
			cursor: pointer;
		}
		.input {
			padding: 20px;
			background-color: ${(props) => props.theme.grayLight};
			border-radius: 8px;
			width: 100%;
			border: 1px solid transparent;
			font-weight: 400;
			transition: all 0.2s linear;
		}
		input::-webkit-input-placeholder {
			color: rgba(132, 135, 139, 1);
		}
		input::-moz-input-placeholder {
			color: rgba(132, 135, 139, 1);
		}
		input:focus::-webkit-input-placeholder {
			color: rgba(196, 196, 196, 1);
		}
		input:focus::-moz-input-placeholder {
			color: rgba(196, 196, 196, 1);
		}
		.input:focus {
			border-radius: 8px;
			border: 1px solid #00b4aa;
			background: #fff;
		}
	`;

	return (
		<SignUpPage>
			<div className="container">
				<img className="logo" srcSet="/logo.png 2x" alt="Logo"></img>
				<h2 className="heading">Monkey Blogging</h2>
				<form className="form">
					<div className="field">
						<label htmlFor="fullname" className="label">
							Fullname
						</label>
						<input
							autoComplete="off"
							id="fullname"
							type="text"
							className="input"
							placeholder="Please enter your fullname"
						/>
					</div>
				</form>
			</div>
		</SignUpPage>
	);
};

export default SignUpPage;
