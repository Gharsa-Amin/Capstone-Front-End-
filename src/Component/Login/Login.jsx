import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex } from "../../../lib/regex";

export default function LoginPage() {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	console.log(formData);
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccess(false);

		if (!formData.email || !formData.password) {
			setErrorMessage("You must provide a username and a password");
			return;
		}

		// Check the format of the email address via a regular expression
		if (!emailRegex.test(formData.email)) {
			setErrorMessage(
				"The email address is not valid. Expected format: x@x.xx"
			);
			return;
		}

		try {
			// To login, send a POST request to the `/users/login` endpoint
			const { data } = await axios.post(
				`${import.meta.env.VITE_API_BASE_URL}/users/login`,
				{
					email: formData.email,
					password: formData.password,
				}
			);

			console.log(data);

			// To ensure the frontend stays logged in, store the JWT in localStorage
			localStorage.setItem("authToken", data.authToken);

			setSuccess(true);
			setTimeout(() => {
				navigate("/onboardingform");
			}, 2000);
		} catch (error) {
			console.error(error); // Log the full error object for debugging

			if (error.response) {
				// The request was made and the server responded with a status code outside of 2xx
				setErrorMessage(error.response.data.message || "An error occurred.");
			} else if (error.request) {
				// The request was made, but no response was received
				setErrorMessage(
					"No response from server. Please check your connection."
				);
			} else {
				// Something happened in setting up the request that triggered an Error
				setErrorMessage("An error occurred while setting up the request.");
			}
		}
	};

	return (
		<main>
			<h2>Login</h2>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form__group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form__group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<button>Login</button>
				{errorMessage && <p>{errorMessage}</p>}
				{success && <p>Success! Redirecting to profile page...</p>}
			</form>
		</main>
	);
}
