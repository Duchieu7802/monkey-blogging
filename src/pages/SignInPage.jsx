import { useEffect, useState } from "react";
import Field from "../components/Field/Field";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import EyeOpen from "../components/icon/EyeOpen";
import EyeClose from "../components/icon/EyeClose";
import styled from "styled-components";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import { toast } from "react-toastify";
const SignInPage = () => {
	const navigate = useNavigate();
	const { userInfo } = useAuth();

	const [togglePassword, setTogglePassword] = useState(false);
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Please enter valid email")
			.required("Please enter your email"),
		password: yup
			.string()
			.min(6, "Password must be at least 6 character")
			.required("Please enter your password"),
	});
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		watch,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const handleSignin = async (values) => {
		if (!isValid) return;
		await signInWithEmailAndPassword(auth, values.email, values.password);
		navigate("/");
	};
	useEffect(() => {
		document.title = "Login";
		if (userInfo?.email) navigate("/");
	}, []);
	useEffect(() => {
		const arrError = Object.values(errors);
		if (arrError.length > 0) {
			toast.error(arrError[0].message, {
				pauseOnHover: false,
			});
		}
	}, [errors]);
	return (
		<AuthenticationPage>
			<form className="form" onSubmit={handleSubmit(handleSignin)}>
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
						type={togglePassword ? "text" : "password"}
						placeholder="Please enter your password"
					>
						{togglePassword ? (
							<EyeOpen
								className="input-icon"
								onclick={() => setTogglePassword(false)}
							></EyeOpen>
						) : (
							<EyeClose
								classname="input-icon"
								onclick={() => setTogglePassword(true)}
							></EyeClose>
						)}
					</Input>
				</Field>
				<div className="check-account">
					<Button
						type="submit"
						isLoading={isSubmitting}
						disabled={isSubmitting}
					>
						Sign In
					</Button>
					<div className="have-account">
						<span>Not a member? </span>
						<NavLink to={"/signup"} className="title">
							Sign Up here
						</NavLink>
					</div>
				</div>
			</form>
		</AuthenticationPage>
	);
};

export default SignInPage;
