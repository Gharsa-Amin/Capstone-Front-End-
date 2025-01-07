import { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";
export default function StocksCharts() {
	const [stocksCharts, setStocksCharts] = useState([]);
	useEffect(() => {
		const fetchStockData = async () => {
			const url =
				"https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2024-12-20?adjusted=true&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";
			try {
				const response = await axios.get(url);
				console.log(response.data.results);
				setStocksCharts(response.data.results);
			} catch (error) {
				console.error(error);
			}
		};
		fetchStockData();
	}, []);
	return (
		<section>
			<ul>
				{stocksCharts.map((stocksChart, index) => (
					<li key={index}>
						<p>Ticker: {stocksChart.t}</p>
						<p>Volume: {stocksChart.v}</p>
						<p>VWAP: {stocksChart.vw}</p>
						<p>Open: {stocksChart.o}</p>
						<p>Close: {stocksChart.c}</p>
						<p>High: {stocksChart.h}</p>
						<p>Low: {stocksChart.l}</p>
						<p>Number of Trades: {stocksChart.n}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
