import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
export default function DerivativeExchangeList() {
	const [derivativesExchanges, setDerivativesExchanges] = useState([]);

	useEffect(() => {
		const fetchDerivativesExchanges = async () => {
			const url =
				"https://api.coingecko.com/api/v3/derivatives/exchanges?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setDerivativesExchanges(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchDerivativesExchanges();
	}, []);

	return (
		<section>
			<ul>
				{derivativesExchanges.map((derivativeExchange) => {
					return (
						<li key={derivativeExchange.id}>
							<p> Derivative Exchange Name: {derivativeExchange.name}</p>
							<p>Open Interest BTC: {derivativeExchange.open_interest_btc}</p>
							<p>
								{" "}
								Trade Volume in 24hours in BTC:{" "}
								{derivativeExchange.trade_volume_24h_btc}
							</p>
							<p>
								Number of Perpetual Pairs:{" "}
								{derivativeExchange.number_of_perpetual_pairs}
							</p>
							<p>
								Number of Futures Pairs:{" "}
								{derivativeExchange.number_of_futures_pairs}
							</p>
							<p>{derivativeExchange.description}</p>
							<p>{derivativeExchange.url}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
