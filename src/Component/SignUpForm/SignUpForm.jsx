import { useState } from "react";
import "./SignUpForm.scss";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUpForm() {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [nameError, setNameError] = useState(false);
	const [phoneNumberError, setPhoneNumberError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		setNameError(!name);
		setPhoneNumberError(!phoneNumber || phoneNumber.length !== 10);
		setEmailError(!email || !email.includes("@"));
		setPasswordError(!password);

		if (
			!name ||
			!phoneNumber ||
			phoneNumber.length !== 10 ||
			!email ||
			!email.includes("@") ||
			!password
		) {
			return;
		}

		const signUpInfo = {
			full_name: name,
			contact_password: password,
			contact_phone: phoneNumber,
			contact_email: email,
		};

		const url = "http://localhost:8080/api/registration";

		try {
			await axios.post(url, signUpInfo);
			setName("");
			setPhoneNumber("");
			setEmail("");
			setPassword("");
			window.location = "/";
		} catch (error) {
			console.error("Error during sign up:", error);
		}
	};

	return (
		<div className="sign-up-form">
			<h1 className="h1">
				<Link to="/">
					<svg
						className="arrow-back"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
							fill="#2E66E6"
						/>
					</svg>
				</Link>
				Sign Up Form
			</h1>

			<form onSubmit={handleSubmit} className="sign-up-form__form">
				<div className="sign-up-form__form-wrapper">
					<div className="sign-up-form__input-group">
						<label className="sign-up-form__label">Full Name</label>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							value={name}
							className={`sign-up-form__input ${nameError ? "error" : ""}`}
							onChange={(event) => {
								setName(event.target.value);
								setNameError(false);
							}}
						/>
						{nameError && (
							<p className="error-message">
								<svg
									className="error-svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
										fill="#C94515"
									/>
								</svg>
								This field is required
							</p>
						)}
					</div>

					<div className="sign-up-form__input-group">
						<label className="sign-up-form__label">Phone Number</label>
						<input
							type="text"
							name="phoneNumber"
							placeholder="Phone Number"
							value={phoneNumber}
							className={`sign-up-form__input ${
								phoneNumberError ? "error" : ""
							}`}
							onChange={(event) => {
								setPhoneNumber(event.target.value);
								setPhoneNumberError(false);
							}}
						/>
						{phoneNumberError && (
							<p className="error-message">
								<svg
									className="error-svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
										fill="#C94515"
									/>
								</svg>
								This field is required: must be a valid phone number
							</p>
						)}
					</div>

					<div className="sign-up-form__input-group">
						<label className="sign-up-form__label">Email</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={email}
							className={`sign-up-form__input ${emailError ? "error" : ""}`}
							onChange={(event) => {
								setEmail(event.target.value);
								setEmailError(false);
							}}
						/>
						{emailError && (
							<p className="error-message">
								<svg
									className="error-svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
										fill="#C94515"
									/>
								</svg>
								This field is required: must be a valid email
							</p>
						)}
					</div>

					<div className="sign-up-form__input-group">
						<label className="sign-up-form__label">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							className={`sign-up-form__input ${passwordError ? "error" : ""}`}
							onChange={(event) => {
								setPassword(event.target.value);
								setPasswordError(false);
							}}
						/>
						{passwordError && (
							<p className="error-message">
								<svg
									className="error-svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
										fill="#C94515"
									/>
								</svg>
								This field is required
							</p>
						)}
					</div>

					<div className="sign-up-form__buttons">
						<div className="buttons__wrapper">
							<Link to="/">
								<button className="buttons__button cancel">Cancel</button>
							</Link>
							<button type="submit" className="buttons__button add-warehouse">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
