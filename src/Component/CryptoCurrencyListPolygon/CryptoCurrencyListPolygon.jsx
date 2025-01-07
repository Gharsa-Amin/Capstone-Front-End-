import { useState, useEffect } from "react";
import axios from "axios";

export default function CryptoCurrencyListPolygon() {
	const [cryptocurrencyLists, setCryptocurrencyLists] = useState([]);
	useEffect(() => {
		const fetchCoinList = async () => {
			const url =
				"https://api.polygon.io/v3/reference/tickers?active=true&limit=300&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setCryptocurrencyLists(response.data.results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCoinList();
	}, []);

	return (
		<section>
			<ul>
				{cryptocurrencyLists.map((cryptocurrencyList) => (
					<div>
						<h2>{cryptocurrencyList.ticker}</h2>
						<p>{cryptocurrencyList.name}</p>
					</div>
				))}
			</ul>
		</section>
	);
}

// Name for the app: // Trade Revolution: G & D Innovation
