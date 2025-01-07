import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function DefiMarketCap() {
	const [defiMarketCap, setDefiMarketCap] = useState([]);

	useEffect(() => {
		const fetchDefi = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/global/decentralized_finance_defi?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";
			try {
				const response = await axios.get(URL);
				console.log(response.data.data);
				setDefiMarketCap(response.data.data);
			} catch (error) {
				console.error("Error fetching coins:", error);
			}
		};
		fetchDefi();
	}, []);

	return (
		<section className="defi">
			<p>Defi Market Cap: {defiMarketCap.defi_market_cap}</p>
			<p>Eth Market Cap: {defiMarketCap.eth_market_cap}</p>
			<p>Defi to Eth Ratio: {defiMarketCap.defi_to_eth_ratio}</p>
			<p>
				Trading Volume in the last 24hours: {defiMarketCap.trading_volume_24h}
			</p>
			<p>Defi Dominance: {defiMarketCap.defi_dominance}</p>
			<p>Top Coin Name: {defiMarketCap.top_coin_name}</p>
			<p>Top Coin Defi Dominance: {defiMarketCap.top_coin_defi_dominance}</p>
		</section>
	);
}
