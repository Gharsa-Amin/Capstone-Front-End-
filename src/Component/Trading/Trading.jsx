import { useState, useEffect } from "react";
import axios from "axios";

export default function Trading() {
	const [coinAmount, setCoinAmount] = useState("");
	const [fromCoin, setFromCoin] = useState("");
	const [toCoin, setToCoin] = useState("");
	const [cadValue, setCadValue] = useState("");
	const [cryptocurrencies, setCryptocurrencies] = useState([]); //
	const [selectedFromCoin, setSelectedFromCoin] = useState(null);
	const [selectedToCoin, setSelectedToCoin] = useState(null);
	const [tradeSuccessMessage, setTradeSuccessMessage] = useState("");

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

	const handleSelectFromCoin = (event) => {
		const selectedCoinId = event.target.value;
		const selectedCoinData = cryptocurrencies.find(
			(coin) => coin.id === selectedCoinId
		);
		setFromCoin(selectedCoinId);
		setSelectedFromCoin(selectedCoinData);
		setCadValue("");
		setTradeSuccessMessage("");
	};

	const handleSelectToCoin = (event) => {
		const selectedCoinId = event.target.value;
		const selectedCoinData = cryptocurrencies.find(
			(coin) => coin.id === selectedCoinId
		);
		setToCoin(selectedCoinId);
		setSelectedToCoin(selectedCoinData);

		if (coinAmount && selectedFromCoin && selectedCoinData) {
			const conversionRate =
				selectedCoinData.current_price / selectedFromCoin.current_price;
			const convertedAmount = coinAmount * conversionRate;
			setCadValue(convertedAmount.toFixed(2));
		}
	};

	const handleCoinAmount = (event) => {
		const amount = event.target.value;
		setCoinAmount(amount);

		if (amount && selectedFromCoin && selectedToCoin) {
			const conversionRate =
				selectedToCoin.current_price / selectedFromCoin.current_price;
			const convertedAmount = amount * conversionRate;
			setCadValue(convertedAmount.toFixed(2));
		}
	};

	const formSubmit = (event) => {
		event.preventDefault();
		if (!coinAmount || !selectedFromCoin || !selectedToCoin) {
			alert("Please select both coins and enter an amount.");
			return;
		}

		setTradeSuccessMessage("You have traded successfully!");

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

			<label htmlFor="coinAmount" id="label-coin">
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

			{cadValue && (
				<div className="conversion__result">
					<p>Converted value: {cadValue} CAD</p>
				</div>
			)}

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

			<label htmlFor="cadValue" id="label-cad">
				<input
					type="text"
					placeholder="Converted amount"
					name="cadValue"
					id="cadValue"
					value={cadValue}
					readOnly
				/>
			</label>

			<button type="submit">Trade</button>

			{tradeSuccessMessage && (
				<div className="success-message">
					<p>{tradeSuccessMessage}</p>
				</div>
			)}
		</form>
	);
}
