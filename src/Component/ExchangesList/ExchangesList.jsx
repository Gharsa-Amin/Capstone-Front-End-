import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
export default function ExchangeList() {
	const [exchanges, setExchanges] = useState([]);

	useEffect(() => {
		const fetchExchanges = async () => {
			const url =
				"https://api.coingecko.com/api/v3/exchanges?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setExchanges(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchExchanges();
	}, []);

	return (
		<section>
			<ul>
				{exchanges.map((exchange) => {
					return (
						<li key={exchange.id}>
							<p> Exchange Name: {exchange.name}</p>
							<p>Year Established: {exchange.year_established}</p>
							<p> Exchange Description: {exchange.description}</p>
							<p>Click here to trade on the exchange: {exchange.url}</p>
							<p>Trade Volume 24Hour BTC: {exchange.trade_volume_24h_btc}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
