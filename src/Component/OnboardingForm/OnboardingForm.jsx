import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OnboardingForm() {
	const [networth, setNetworth] = useState("");
	const [riskTolerance, setRiskTolerance] = useState("");
	const [tradingExperience, setTradingExperience] = useState("");
	const [products, setProducts] = useState([]);
	const [topCryptoCoins, setTopCryptoCoins] = useState([]);
	const [currentOccupation, setCurrentOccupation] = useState("");
	const [scammedBefore, setScammedBefore] = useState("");
	const [someoneHelping, setSomeoneHelping] = useState();
	const [sharedAccess, setSharedAccess] = useState();

	const [networthError, setNetworthError] = useState(false);
	const [riskToleranceError, setRiskToleranceError] = useState(false);
	const [tradingExperienceError, setTradingExperienceError] = useState(false);
	const [productsError, setProductsError] = useState(false);
	const [topCryptoCoinsError, setTopCryptoCoinsError] = useState(false);
	const [scammedBeforeError, setScammedBeforeError] = useState(false);
	const [someoneHelpingError, setSomeoneHelpingError] = useState(false);
	const [sharedAccessError, setSharedAccessError] = useState(false);

	const [cryptocurrencies, setCryptocurrencies] = useState([]);

	useEffect(() => {
		const fetchCryptocurrencies = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad";
			try {
				const response = await axios.get(URL);
				setCryptocurrencies(response.data); // Store fetched cryptocurrencies
			} catch (error) {
				console.error("Error fetching cryptocurrencies", error);
			}
		};
		fetchCryptocurrencies();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Validation checks
		setNetworthError(!networth);
		setRiskToleranceError(!riskTolerance);
		setTradingExperienceError(!tradingExperience);
		setProductsError(!products.length);
		setTopCryptoCoinsError(topCryptoCoins.length === 0);
		setScammedBeforeError(scammedBefore === null);
		setSomeoneHelpingError(someoneHelping === null);
		setSharedAccessError(sharedAccess === null);

		if (
			!networth ||
			!riskTolerance ||
			!tradingExperience ||
			!products.length ||
			topCryptoCoins.length === 0 ||
			scammedBefore === null ||
			someoneHelping === null ||
			sharedAccess === null
		) {
			return;
		}

		const newData = {
			networth,
			risk_tolerance: riskTolerance,
			trading_experience: tradingExperience,
			products,
			top_crypto_coins: topCryptoCoins,
			current_occupation: currentOccupation,
			scammed_before: scammedBefore,
			someone_helping: someoneHelping,
			shared_access: sharedAccess,
		};

		// Send data to API (replace URL as needed)
		const url = "http://localhost:8080/api/onboarding";
		try {
			await axios.post(url, newData);
			// Reset form after successful submission
			setNetworth("");
			setRiskTolerance("");
			setTradingExperience("");
			setProducts([]);
			setTopCryptoCoins([]);
			setCurrentOccupation("");
			setScammedBefore(null);
			setSomeoneHelping(null);
			setSharedAccess(null);
			window.location = "/";
		} catch (error) {
			console.error("Failed to submit onboarding data", error);
		}
	};

	const handleCryptoSelect = (e) => {
		const selectedValues = Array.from(
			e.target.selectedOptions,
			(option) => option.value
		);

		if (selectedValues.length <= 6) {
			setTopCryptoCoins(selectedValues);
			setTopCryptoCoinsError(false);
		} else {
			setTopCryptoCoinsError(true); // Show error if more than 10 are selected
		}
	};

	return (
		<div className="new-trading">
			<div className="new-trading__wrapper">
				<div className="header-wrapper">
					<h1 className="h1">
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
						Onboarding Form
					</h1>
				</div>

				<form onSubmit={handleSubmit} className="new-trading__form">
					<div className="new-trading__form-wrapper">
						<div className="details details--trading">
							<h2 className="trading__header">Trading Preferences</h2>

							{/* Networth */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									What is your net worth?
								</label>
								<select
									name="networth"
									value={networth}
									className={`trading__input ${networthError ? "error" : ""}`}
									onChange={(e) => {
										setNetworth(e.target.value);
										setNetworthError(false);
									}}
								>
									<option value="">Select Net Worth</option>
									<option value="Less than 50,000">Less than 50,000</option>
									<option value="50,000-150,000">50,000 - 150,000</option>
									<option value="150,000-500,000">150,000 - 500,000</option>
									<option value="Above 500,000">Above 500,000</option>
								</select>
								{networthError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Risk Tolerance */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									What is your risk tolerance?
								</label>
								<select
									name="riskTolerance"
									value={riskTolerance}
									className={`trading__input ${
										riskToleranceError ? "error" : ""
									}`}
									onChange={(e) => {
										setRiskTolerance(e.target.value);
										setRiskToleranceError(false);
									}}
								>
									<option value="">Select Risk Tolerance</option>
									<option value="High">High Risk Tolerance</option>
									<option value="Medium">Medium Risk Tolerance</option>
									<option value="Low">Low Risk Tolerance</option>
								</select>
								{riskToleranceError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Trading Experience */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									How long have you been trading?
								</label>
								<select
									name="tradingExperience"
									value={tradingExperience}
									className={`trading__input ${
										tradingExperienceError ? "error" : ""
									}`}
									onChange={(e) => {
										setTradingExperience(e.target.value);
										setTradingExperienceError(false);
									}}
								>
									<option value="">Select Experience</option>
									<option value="0">0 years of trading experience</option>
									<option value="1-3">1-3 years of trading experience</option>
									<option value="More than 3">
										More than 3 years of trading experience
									</option>
								</select>
								{tradingExperienceError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Products to Trade */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									Which products would you like to trade?
								</label>
								<select
									multiple
									name="products"
									value={products}
									className={`trading__input ${productsError ? "error" : ""}`}
									onChange={(e) => {
										setProducts(
											Array.from(
												e.target.selectedOptions,
												(option) => option.value
											)
										);
										setProductsError(false);
									}}
								>
									<option value="Cryptocurrency">Cryptocurrency</option>
									<option value="Perps">Perps</option>
									<option value="Futures">Futures</option>
									<option value="Algorithmic Trading">
										Algorithmic Trading
									</option>
								</select>
								{productsError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Top Crypto Coins */}
							<div className="trading__info-wrapper">
								<label className="trading__label">Top 6 Cryptocurrencies</label>
								<select
									multiple
									name="topCryptoCoins"
									value={topCryptoCoins}
									className={`trading__input ${
										topCryptoCoinsError ? "error" : ""
									}`}
									onChange={handleCryptoSelect}
								>
									{cryptocurrencies.map((coin) => (
										<option key={coin.id} value={coin.name}>
											{coin.name} ({coin.symbol.toUpperCase()})
										</option>
									))}
								</select>
								{topCryptoCoinsError && (
									<p className="error-message">
										Select up to 6 cryptocurrencies
									</p>
								)}
							</div>

							{/* Current Occupation */}
							<div className="trading__info-wrapper">
								<label className="trading__label">Current Occupation</label>
								<input
									type="text"
									name="currentOccupation"
									placeholder="Enter your current occupation"
									value={currentOccupation}
									className="trading__input"
									onChange={(e) => setCurrentOccupation(e.target.value)}
								/>
							</div>

							{/* Scammed Before */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									Have you ever been scammed before?
								</label>
								<select
									name="scammedBefore"
									value={scammedBefore}
									className={`trading__input ${
										scammedBeforeError ? "error" : ""
									}`}
									onChange={(e) => {
										setScammedBefore(e.target.value);
										setScammedBeforeError(false);
									}}
								>
									<option value={null}>Select Yes or No</option>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
								{scammedBeforeError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Someone Helping */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									Is someone helping you with this onboarding?
								</label>
								<select
									name="someoneHelping"
									value={someoneHelping}
									className={`trading__input ${
										someoneHelpingError ? "error" : ""
									}`}
									onChange={(e) => {
										setSomeoneHelping(e.target.value);
										setSomeoneHelpingError(false);
									}}
								>
									<option value={null}>Select Yes or No</option>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
								{someoneHelpingError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Shared Access */}
							<div className="trading__info-wrapper">
								<label className="trading__label">
									Do you share your account with someone else?
								</label>
								<select
									name="sharedAccess"
									value={sharedAccess}
									className={`trading__input ${
										sharedAccessError ? "error" : ""
									}`}
									onChange={(e) => {
										setSharedAccess(e.target.value);
										setSharedAccessError(false);
									}}
								>
									<option value={null}>Select Yes or No</option>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
								{sharedAccessError && (
									<p className="error-message">This field is required</p>
								)}
							</div>

							{/* Submit Button */}
							<div className="trading__btn-wrapper">
								<button className="trading__submit-btn" type="submit">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
