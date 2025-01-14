import { useState, useEffect } from "react";
import axios from "axios";

export default function Trading({ current_price }) {
	const [coinAmount, setCoinAmount] = useState("");
	const [cadValue, setCadValue] = useState("");
	const [cryptocurrencies, setCryptocurrencies] = useState([]);
	const [topCryptoCoins, setTopCryptoCoins] = useState([]);
	const [topCryptoCoinsError, setTopCryptoCoinsError] = useState(false);
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

	const handleCoinAmount = (event) => {
		setCoinAmount(event.target.value);
	};

	// Handle form submission
	function formSubmit(event) {
		event.preventDefault();
		const coinConversion = coinAmount * current_price;
		setCadValue(coinConversion.toFixed(2));
	}

	return (
		<form id="form" onSubmit={formSubmit}>
			<div className="trading__info-wrapper">
				<label className="trading__label">From</label>
				<select
					multiple
					name="topCryptoCoins"
					value={cryptocurrencies}
					className={`trading__input ${topCryptoCoinsError ? "error" : ""}`}
					onChange={handleCoinAmount}
				>
					{cryptocurrencies.map((coin) => (
						<option key={coin.id} value={coin.name}>
							{coin.name} ({coin.symbol.toUpperCase()})
						</option>
					))}
				</select>
				{topCryptoCoinsError && (
					<p className="error-message">Select at least one cryptocurrency</p>
				)}
			</div>

			<label htmlFor="coinAmount" id="label-coin">
				<input
					type="text"
					className="amount-title"
					name="coinAmount"
					id="coinAmount"
					onChange={handleCoinAmount}
					// value={coinAmount}
					placeholder="Enter amount"
				/>
			</label>

			<label htmlFor="cadValue" id="label-cad">
				To
				<input
					type="text"
					name="cadValue"
					id="cadValue"
					value={cadValue}
					readOnly
				/>
			</label>

			<label htmlFor="cadValue" id="label-cad">
				<input
					type="text"
					placeholder="Enter amount"
					name="cadValue"
					id="cadValue"
					value={cadValue}
					readOnly
				/>
			</label>
			<button type="submit">Trade</button>
		</form>
	);
}
