import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DataAboutEachCryptoCurrency.scss";

export default function DataAboutEachCryptoCurrency() {
	const [coinDetails, setCoinDetails] = useState(null);
	const params = useParams();
	const coinId = params.coinId;

	useEffect(() => {
		const fetchCoinDetails = async () => {
			const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5`;
			try {
				const response = await axios.get(URL);
				console.log(response.data); // Inspect the structure of the response
				setCoinDetails(response.data[0]); // The API response is an array, so we access the first element
			} catch (error) {
				console.error("Error fetching coins:", error);
			}
		};
		fetchCoinDetails();
	}, [coinId]);

	if (!coinDetails) {
		// Optionally, you can display a loading spinner or message while the data is being fetched
		return <p>Loading...</p>;
	}

	// Destructure the values from coinDetails to use them in JSX
	const {
		market_cap,
		fully_diluted_valuation,
		total_volume,
		current_price,
		high_24h,
		low_24h,
		price_change_24h,
		price_change_percentage_24h,
		market_cap_change_percentage_24h,
		circulating_supply,
		total_supply,
		ath,
		ath_date,
		atl,
		atl_date,
	} = coinDetails;

	return (
		<>
			<div className="coin-list__section">
				<p className="coin-list__price">Market Cap: ${market_cap}</p>

				<p className="coin-list__diluted-valuation">
					Full Diluted Valuation: ${fully_diluted_valuation}
				</p>

				<p className="coin-list__total-volume">Total Volume: {total_volume}</p>

				<p className="coin-list__total-volume">
					Current Price: ${current_price}
				</p>

				<p className="coin-list__high24">24Hrs High: ${high_24h}</p>

				<p className="coin-list__low24">24Hrs Low: ${low_24h}</p>

				<p className="coin-list__price-change">
					Price Change in 24Hrs: ${price_change_24h}
				</p>

				<p className="coin-list__percentage-change">
					Price Change in 24Hrs: {price_change_percentage_24h}%
				</p>

				<p className="coin-list__cap-change">
					Market Cap Change: {market_cap_change_percentage_24h}%
				</p>

				<p className="coin-list__circulating-supply">
					Circulating Supply: {circulating_supply}
				</p>

				<p className="coin-list__total-supply">Total Supply: {total_supply}</p>

				<p className="coin-list__all-time-high">All Time High: ${ath}</p>

				<p className="coin-list__all-time-high-date">
					All Time High Date: {ath_date}
				</p>

				<p className="coin-list__all-time-low">All Time Low: ${atl}</p>

				<p className="coin-list__all-time-low-date">
					All Time Low Date: {atl_date}
				</p>
			</div>
		</>
	);
}
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function DataAboutBTC() {
// 	const [dataBTC, setDataBTC] = useState(null);

// 	useEffect(() => {
// 		const fetchBTC = async () => {
// 			const url = "http://localhost:5000/api/btc";
// 			try {
// 				const response = await axios.get(url, {});
// 				setDataBTC(response.data);
// 			} catch (error) {
// 				console.log("Error fetching data:", error);
// 			}
// 		};

// 		fetchBTC();
// 	}, []);

// 	return (
// 		<section>
// 			{dataBTC ? <p>{dataBTC.description}</p> : <p>Loading Bitcoin data...</p>}
// 		</section>
// 	);
// }
