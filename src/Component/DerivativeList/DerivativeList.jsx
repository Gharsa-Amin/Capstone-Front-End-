import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function DerivativeList() {
	const [derivatives, setDerivatives] = useState([]);

	useEffect(() => {
		const fetchDerivatives = async () => {
			const url =
				"https://api.coingecko.com/api/v3/derivatives?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setDerivatives(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchDerivatives();
	}, []);

	return (
		<section>
			<ul>
				{derivatives.map((derivative) => {
					return (
						<li key={uuidv4()}>
							{" "}
							{/* Call uuidv4() here */}
							<p> Derivates Market: {derivative.market}</p>
							<p>Derivates Symbol: {derivative.symbol}</p>{" "}
							<p>Price: {derivative.price}</p>
							<p>
								{" "}
								Price Percentage Change in 24hours:{" "}
								{derivative.price_percentage_change_24h}
							</p>
							<p>Contract Type: {derivative.contract_type}</p>
							<p>Index: {derivative.index}</p>
							<p>Basis: {derivative.basis}</p>
							<p>Spread: {derivative.spread}</p>
							<p>Funding Rate: {derivative.funding_rate}</p>
							<p>Open Interest: {derivative.open_interest}</p>
							<p>Volume in 24hours: {derivative.volume_24h}</p>
							<p>Last Traded at: {derivative.last_traded_at}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
