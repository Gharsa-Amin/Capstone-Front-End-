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

	const formatDate = (date) => {
		if (!date) return null;
		const dataobj = new Date(date);
		return dataobj.toLocaleDateString("en-ca");
	};
	return (
		<>
			<div className="coin-list__section">
				<div className="wrapper">
					<p className="coin-list__price">Market Cap: ${market_cap}</p>
				</div>

				<div className="wrapper">
					<div>Full Diluted Valuation</div>
					<p className="coin-list__diluted-valuation">
						${fully_diluted_valuation}
					</p>
				</div>
				<div className="wrapper">
					<div>Total Volume</div>
					<p className="coin-list__total-volume"> {total_volume}</p>
				</div>
				<div className="wrapper">
					<div>Current Price </div>
					<p className="coin-list__total-volume">${current_price}</p>
				</div>
				<div className="wrapper">
					<div>24Hrs High</div>
					<p className="coin-list__high24">${high_24h}</p>
				</div>
				<div className="wrapper">
					<div>24Hrs Low</div>
					<p className="coin-list__low24">${low_24h}</p>
				</div>
				<div className="wrapper">
					<div>Price Change in 24Hrs</div>
					<p className="coin-list__price-change">${price_change_24h}</p>
				</div>

				<div className="wrapper">
					<div>Price Change in 24Hrs </div>
					<p className="coin-list__percentage-change">
						{price_change_percentage_24h}%
					</p>
				</div>
				<div className="wrapper">
					<div>Market Cap Change</div>
					<p className="coin-list__cap-change">
						{market_cap_change_percentage_24h}%
					</p>
				</div>

				<div className="wrapper">
					<div>Circulating Supply</div>
					<p className="coin-list__circulating-supply">{circulating_supply}</p>
				</div>
				<div className="wrapper">
					<div>Total Supply</div>
					<p className="coin-list__total-supply">{total_supply}</p>
				</div>
				<div className="wrapper">
					<div>All Time High</div>
					<p className="coin-list__all-time-high">
						{" "}
						{ath_date ? new Date(ath_date).toLocaleDateString("en-CA") : "N/A"}
					</p>
				</div>

				<div className="wrapper">
					<div>All Time Low Date</div>
					<p className="coin-list__all-time-low-date">
						{atl_date ? new Date(atl_date).toLocaleDateString("en-CA") : "N/A"}
					</p>
				</div>
			</div>
		</>
	);
}
