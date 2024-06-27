import { styled } from "styled-components";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import Field from "../components/Field/Field";
import EyeClose from "../components/icon/EyeClose";

const SignUpPage = () => {
	const SignUpPage = styled.div`
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
	`;
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		watch,
	} = useForm();
	const handleSignUp = (values) => console.log(values);
	return (
		<SignUpPage>
			<div className="container">
				<img className="logo" srcSet="/logo.png 3x" alt="Logo"></img>
				<h2 className="heading">Monkey Blogging</h2>
				<form className="form" onSubmit={handleSubmit(handleSignUp)}>
					<Field>
						<Label htmlFor="fullname">Fullname</Label>
						<Input
							control={control}
							autoComplete="off"
							name="fullname"
							type="text"
							placeholder="Please enter your fullname"
						/>
					</Field>
					<Field>
						<Label htmlFor="email">Email address</Label>
						<Input
							control={control}
							autoComplete="off"
							name="email"
							type="email	"
							placeholder="Please enter your email address"
						/>
					</Field>
					<Field>
						<Label htmlFor="password">Password</Label>
						<Input
							control={control}
							autoComplete="off"
							name="password"
							type="password"
							placeholder="Please enter your password"
						>
							<EyeClose></EyeClose>
						</Input>
					</Field>
				</form>
			</div>
		</SignUpPage>
	);
};

export default SignUpPage;
