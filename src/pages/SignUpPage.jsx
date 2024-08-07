import { styled } from "styled-components";
import { Label } from "../components/label";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import Field from "../components/Field/Field";
import EyeClose from "../components/icon/EyeClose";
import { useEffect, useState } from "react";
import EyeOpen from "../components/icon/EyeOpen";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
const schema = yup.object().shape({
	fullname: yup.string().required("Please enter your fullname"),
	email: yup
		.string()
		.email("Please enter valid email")
		.required("Please enter your email"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 character")
		.required("Please enter your password"),
});
const SignUpPage = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		watch,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const handleSignUp = async (values) => {
		if (!isValid) return setTimeout(() => {}, 3000);

		await createUserWithEmailAndPassword(auth, values.email, values.password);
		await updateProfile(auth.currentUser, {
			displayName: values.fullname,
		});
		const colRef = collection(db, "users");
		await addDoc(colRef, {
			fullname: values.fullname,
			email: values.email,
			password: values.password,
		});
		await toast.success("Create user successfull!!");
		await navigate("/login");
	};
	useEffect(() => {
		document.title = "Sign Up";
	}, []);
	useEffect(() => {
		const arrError = Object.values(errors);
		if (arrError.length > 0) {
			toast.error(arrError[0].message, {
				pauseOnHover: false,
			});
		}
	}, [errors]);

	const [togglePassword, setTogglePassword] = useState(false);

	return (
		<AuthenticationPage>
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
						type="email"
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
						Sign Up
					</Button>
					<div className="have-account">
						<span>Already a member? </span>
						<NavLink to="/login" className="title">
							Login here
						</NavLink>
					</div>
				</div>
			</form>
		</AuthenticationPage>
	);
};

export default SignUpPage;
