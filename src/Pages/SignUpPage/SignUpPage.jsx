import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { emailRegex } from "../../../lib/regex";
import { Link } from "react-router-dom";
import "./SignUpPage.scss";
export default function SignUpPage() {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(false);
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		phonenumber: "",
		password: "",
		name: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form data:", formData);
		if (
			!formData.email ||
			!formData.password ||
			!formData.name ||
			!formData.phonenumber
		) {
			setErrorMessage("You must fill in all the form fields");
			return;
		}

		// Check the format of the email address via a regular expression
		if (!emailRegex.test(formData.email)) {
			setErrorMessage(
				"The email address is not valid. Expected format: x@x.xx"
			);
			return;
			xwxw;
		}
		try {
			// To register a user, send a POST request to the `/users/register` endpoint
			await axios.post("http://localhost:8080/api/users/register", {
				name: formData.name,
				email: formData.email,
				password: formData.password,
				phonenumber: formData.phonenumber,
			});

			console.log(`${import.meta.env.VITE_API_BASE_URL}/users/register`);

			setErrorMessage("");
			setSuccess(true);
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<main>
			<div className="form__navigation">
				<Link className="form__link" to="/">
					HomePage
					<svg
						className="form__arrow-back"
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
					<h2>Sign Up Form</h2>
				</Link>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__group">
					<label htmlFor="name" className="form__label">
						Name
					</label>
					<input
						className="form__input"
						type="text"
						name="name"
						id="name"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form__group">
					<label htmlFor="emailRegister" className="form__label">
						Email Address
					</label>
					<input
						className="form__input"
						type="text"
						name="email"
						id="emailRegister"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form__group">
					<label htmlFor="phonenumber" className="form__label">
						Phone Number
					</label>
					<input
						className="form__input"
						type="text"
						name="phonenumber"
						id="phonenumberRegister"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form__group">
					<label htmlFor="passwordRegister" className="form__label">
						Password
					</label>
					<input
						className="form__input"
						type="password"
						name="password"
						id="passwordRegister"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form__wrapper">
					<button className="form__button">Signup</button>
					{errorMessage && <p>{errorMessage}</p>}
					{success && <p>Success! Redirecting to login page...</p>}
				</div>
			</form>
		</main>
	);
}
