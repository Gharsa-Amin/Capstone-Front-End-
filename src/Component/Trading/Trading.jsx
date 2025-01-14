import { useState } from "react";

export default function Trading({ current_price }) {
	const [coinAmount, setCoinAmount] = useState("");
	const [cadValue, setCadValue] = useState("");

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
			<div className="title">
				<h1 className="title__header">Trade Here</h1>
			</div>
			<label htmlFor="coinAmount" id="label-coin">
				From
				<input
					type="text"
					className="amount-title"
					name="coinAmount"
					id="coinAmount"
					onChange={handleCoinAmount}
					// value={coinAmount}
				/>
			</label>

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
