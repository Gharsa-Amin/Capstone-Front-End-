import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoinList from "../../Component/CryptocurrencyList/CryptocurrencyList";
import CryptoNews from "../../Component/CryptoNews/CryptoNews";
import "./ProfilePage.scss";
export default function ProfilePage() {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [userData, setUserData] = useState({});
	const navigate = useNavigate();

	const getUserData = async () => {
		const authToken = localStorage.getItem("authToken");

		try {
			// The user must be logged in to access this page and API endpoint.
			// Send a GET request to `/users/profile` along with the JWT token from localStroage as a header
			const { data } = await axios.get(
				`${import.meta.env.VITE_API_BASE_URL}/users/profile`,
				{
					headers: {
						authorisation: `Bearer ${authToken}`,
					},
				}
			);

			setUserData(data);
			setIsLoading(false);
		} catch (error) {
			// If the backend responded with a 401 status, that means their JWT isn't valid
			if (error.status === 401) {
				setError("You must be logged in to view this page");
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	// To logout, simply remove the JWT from local storage
	const handleLogout = () => {
		localStorage.removeItem("authToken");
		navigate("/");
	};

	return (
		<main className="profile-page">
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && !error && (
				<section>
					<p className="profile__item">Name: {userData.name}</p>
					<p className="profile__item">Email: {userData.email}</p>
					<div className="profile__item profile__item-modifier">
						<p profile__item>Watchlist:</p>
						<div className="wrapper__profile">{userData.top_crypto_coins}</div>
					</div>
					<p className="profile__item">Phone Number: {userData.phonenumber}</p>
					<p className="profile__item">Net Worth: {userData.net_worth}</p>
					<p className="profile__item">
						Risk Tolerance: {userData.risk_tolerance}
					</p>
					<p className="profile__item">
						Trading Experience: {userData.trading_experience}
					</p>
					<p className="profile__item">Products: {userData.products}</p>
					<p className="profile__item">
						Current Occupation: {userData.current_occupation}
					</p>
					<Link to="/trading">
						<button>Trade</button>
					</Link>
					<button>Deposit</button>
					<button onClick={handleLogout}>Logout</button>
					<h2>Start Trading Here!</h2>
					<CoinList />
					<CryptoNews />
				</section>
			)}
			{error && <p>{error}</p>}
		</main>
	);
}
