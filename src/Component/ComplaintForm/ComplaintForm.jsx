import { useState } from "react";
import axios from "axios";
import "./ComplaintForm.scss";
export default function ComplaintForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [complaints, setComplaints] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Check if all fields are filled
		if (!name || !email || !complaints) {
			setMessage("Please fill out all fields.");
			return;
		}

		const formData = { name, email, complaints }; // 'complaints' instead of 'complaint'

		try {
			// Directly call the backend API here
			const response = await axios.post(
				"http://localhost:8080/complaints",
				formData
			);

			// Handle success
			if (response.status === 201) {
				setMessage("Feedback submitted successfully!");
				setName(""); // Clear the form after submission
				setEmail("");
				setComplaints("");
			}
		} catch (error) {
			// Handle errors
			console.error("Error submitting complaint:", error);
			setMessage("Error submitting complaint. Please try again later.");
		}
	};

	return (
		<section className="form-section">
			<h2>Get In Touch</h2>
			<div className="form-section__header">
				We would love to hear from you. Submit your Feedback here.
				<form onSubmit={handleSubmit}>
					<label>
						Name
						<input
							className="form-section__input"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						Email
						<input
							className="form-section__input"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>

					<label>
						Feedback
						<textarea
							className="form-section__input"
							value={complaints}
							onChange={(e) => setComplaints(e.target.value)}
						/>
					</label>
					<div className="form-section__button">
						<button className="form-section__button" type="submit">
							Submit
						</button>
					</div>
				</form>
				{/* Show success or error message */}
				{message && <p>{message}</p>}
			</div>
		</section>
	);
}
