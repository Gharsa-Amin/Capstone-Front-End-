import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Trading.scss";

export default function Trading() {
	const [coinAmount, setCoinAmount] = useState("");
	const [fromCoin, setFromCoin] = useState("");
	const [toCoin, setToCoin] = useState("");
	const [cadValue, setCadValue] = useState("");
	const [cryptocurrencies, setCryptocurrencies] = useState([]);
	const [selectedFromCoin, setSelectedFromCoin] = useState(null);
	const [selectedToCoin, setSelectedToCoin] = useState(null);
	const [tradeSuccessMessage, setTradeSuccessMessage] = useState("");

	const authToken = localStorage.getItem("authToken");
	console.log(authToken);
	if (!authToken) {
		return <p>You Must be logged in!:)</p>;
	}
	// Fetch cryptocurrencies
	useEffect(() => {
		const fetchCryptocurrencies = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad";
			try {
				const response = await axios.get(URL);
				setCryptocurrencies(response.data);
			} catch (error) {
				console.error("Error fetching cryptocurrencies", error);
			}
		};
		fetchCryptocurrencies();
	}, []);

	// Handle selecting the 'From' coin
	const handleSelectFromCoin = (event) => {
		const selectedCoinId = event.target.value;
		const selectedCoinData = cryptocurrencies.find(
			(coin) => coin.id === selectedCoinId
		);
		setFromCoin(selectedCoinId);
		setSelectedFromCoin(selectedCoinData);
		setCadValue(""); // Reset the CAD value
		setTradeSuccessMessage(""); // Reset success message
		calculateConvertedAmount(selectedCoinData, selectedToCoin, coinAmount);
	};

	// Handle selecting the 'To' coin
	const handleSelectToCoin = (event) => {
		const selectedCoinId = event.target.value;
		const selectedCoinData = cryptocurrencies.find(
			(coin) => coin.id === selectedCoinId
		);
		setToCoin(selectedCoinId);
		setSelectedToCoin(selectedCoinData);
		calculateConvertedAmount(selectedFromCoin, selectedCoinData, coinAmount);
	};

	// Handle coin amount input
	const handleCoinAmount = (event) => {
		const amount = event.target.value;
		setCoinAmount(amount);
		calculateConvertedAmount(selectedFromCoin, selectedToCoin, amount);
	};

	// Calculate the converted amount in CAD
	const calculateConvertedAmount = (fromCoinData, toCoinData, amount) => {
		if (!amount || !fromCoinData || !toCoinData) {
			setCadValue("");
			return;
		}

		const conversionRate =
			toCoinData.current_price / fromCoinData.current_price;
		const convertedAmount = amount * conversionRate;
		setCadValue(convertedAmount.toFixed(2)); // Convert to CAD and round to 2 decimal places
	};

	// Form submit handler
	const formSubmit = (event) => {
		event.preventDefault();
		if (!coinAmount || !selectedFromCoin || !selectedToCoin) {
			alert("Please select both coins and enter an amount.");
			return;
		}
		setTradeSuccessMessage("You have traded successfully!");

		// Reset the form
		setFromCoin("");
		setToCoin("");
		setCoinAmount("");
		setCadValue("");
		setSelectedFromCoin(null);
		setSelectedToCoin(null);
	};

	return (
		<form id="form" onSubmit={formSubmit}>
			<div className="trading__info-wrapper">
				<label className="trading__label">From</label>
				<select
					name="fromCoin"
					value={fromCoin}
					className="trading__input"
					onChange={handleSelectFromCoin}
				>
					<option value="">Select a coin</option>
					{cryptocurrencies.map((coin) => (
						<option key={coin.id} value={coin.id}>
							{coin.name} ({coin.symbol.toUpperCase()})
						</option>
					))}
				</select>
			</div>

			<label htmlFor="coinAmount" id="trading__label">
				<input
					type="number"
					className="amount-title"
					name="coinAmount"
					id="coinAmount"
					value={coinAmount}
					onChange={handleCoinAmount}
					placeholder="Enter amount"
					min="0"
				/>
			</label>

			<div className="trading__info-wrapper">
				<label className="trading__label">To</label>
				<select
					name="toCoin"
					value={toCoin}
					className="trading__input"
					onChange={handleSelectToCoin}
				>
					<option value="">Select a coin</option>
					{cryptocurrencies
						.filter((coin) => coin.id !== fromCoin) // Exclude the selected 'From' coin
						.map((coin) => (
							<option key={coin.id} value={coin.id}>
								{coin.name} ({coin.symbol.toUpperCase()})
							</option>
						))}
				</select>
			</div>

			<label htmlFor="cadValue" className="trading__label">
				<input
					type="text"
					placeholder="Converted amount"
					name="cadValue"
					id="cadValue"
					value={cadValue}
					readOnly
				/>
			</label>

			<Link to="/profile">
				<button type="submit" className="homepage__button">
					Trade🕺💃
				</button>
			</Link>

			{tradeSuccessMessage && (
				<div className="success-message">
					<p>{tradeSuccessMessage}</p>
				</div>
			)}

			<Link className="form__link" to="/profile">
				Go Back to the Main Profile
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
			</Link>
		</form>
	);
}
