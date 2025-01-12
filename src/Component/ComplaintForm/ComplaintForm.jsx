import { useState } from "react";
import axios from "axios";

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
				setMessage("Complaint submitted successfully!");
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
		<section>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>

				<label>
					Feedback/Complaints
					<textarea
						value={complaints}
						onChange={(e) => setComplaints(e.target.value)}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>

			{/* Show success or error message */}
			{message && <p>{message}</p>}
		</section>
	);
}
