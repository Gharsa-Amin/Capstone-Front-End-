import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "./DefiMarketCap.scss";
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
			<h1>Defi MarketCap</h1>
			<table className="defi-table">
				<thead>
					<tr>
						<th>Metric</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr className="even-row">
						<td>Defi Market Cap</td>
						<td>{defiMarketCap.defi_market_cap}</td>
					</tr>
					<tr className="odd-row">
						<td>Eth Market Cap</td>
						<td>{defiMarketCap.eth_market_cap}</td>
					</tr>
					<tr className="even-row">
						<td>Defi to Eth Ratio</td>
						<td>{defiMarketCap.defi_to_eth_ratio}</td>
					</tr>
					<tr className="odd-row">
						<td>Trade Vol 24h</td>
						<td>{defiMarketCap.trading_volume_24h}</td>
					</tr>
					<tr className="even-row">
						<td>Defi Dominance</td>
						<td>{defiMarketCap.defi_dominance}</td>
					</tr>
					<tr className="odd-row">
						<td>Top Coin</td>
						<td>{defiMarketCap.top_coin_name}</td>
					</tr>
					<tr className="even-row">
						<td>Trading at</td>
						<td>{defiMarketCap.top_coin_defi_dominance}</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
