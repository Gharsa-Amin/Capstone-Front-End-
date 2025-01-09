import axios from "axios";
import { useEffect, useState } from "react";
import "./TopGainersAndLosers.scss";

export default function TopGainersAndLosers() {
	const [gainer, setGainers] = useState(null);

	useEffect(() => {
		const fetchTopGainersLosers = async () => {
			const url =
				"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=3EQWSFLTSX6L5S6M";
			try {
				const response = await axios.get(url);
				console.log("API Response:", response);
				if (response.data.error) {
					console.error("API Error:", response.data.error);
					setGainers({
						top_gainers: [],
						top_losers: [],
						most_actively_traded: [],
					});
				} else if (
					response.data.top_gainers &&
					response.data.top_losers &&
					response.data.most_actively_traded
				) {
					setGainers(response.data);
				} else {
					console.error(
						"Unexpected response structure or no data available:",
						response.data
					);
					setGainers({
						top_gainers: [],
						top_losers: [],
						most_actively_traded: [],
					});
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setGainers({
					top_gainers: [],
					top_losers: [],
					most_actively_traded: [],
				});
			}
		};
		fetchTopGainersLosers();
	}, []);

	if (!gainer) {
		return <div>Loading...</div>;
	}
	return (
		<section className="stock">
			<h1>Stocks</h1>
			<ul className="stock__wrapper">
				<h2 className="stock__header">Top Gainers</h2>
				{gainer.top_gainers?.length > 0 ? (
					gainer.top_gainers.map((stock, index) => (
						<li key={index}>
							<div className="stock__border">
								<div className="stock__row">
									<p className="stock__ticker">Stock Ticker: {stock.ticker}</p>
									<p className="stock__price">Price: {stock.price}</p>
								</div>
								<p className="stock__item">
									Change Amount: ${stock.change_amount} ;
								</p>
								<p className="stock__item">
									Change Percentage: {stock.change_percentage}
								</p>
								<p className="stock__item">Change Volume: {stock.volume}</p>
							</div>
						</li>
					))
				) : (
					<p>No gainers data available</p>
				)}
			</ul>

			<ul className="stock__wrapper">
				<h2 className="stock__header"> Top Losers </h2>
				{gainer.top_losers?.length > 0 ? (
					gainer.top_losers.map((stock, index) => (
						<li key={index}>
							<div className="stock__border">
								<div className="stock__row">
									<p className="stock__ticker">Ticker: {stock.ticker}</p>
									<p className="stock__price">Price: {stock.price}</p>
								</div>
								<p className="stock__item">
									Change Amount: ${stock.change_amount}
								</p>
								<p className="stock__item">
									Change Percentage: {stock.change_percentage}
								</p>
								<p className="stock__item">Change Volume: {stock.volume}</p>
							</div>
						</li>
					))
				) : (
					<p>No losers data available</p>
				)}
			</ul>
			<ul className="stock__wrapper">
				<h2 className="stock__header"> Most Actively Traded Stocks </h2>
				{gainer.most_actively_traded?.length > 0 ? (
					gainer.most_actively_traded.map((stock, index) => (
						<li key={index}>
							<div className="stock__border">
								<div className="stock__row">
									<p className="stock__ticker">Ticker: {stock.ticker}</p>
									<p className="stock__price">Price: {stock.price}</p>
								</div>
								<p className="stock__item">
									Change Amount: ${stock.change_amount}
								</p>
								<p className="stock__item">
									Change Percentage: {stock.change_percentage}
								</p>
								<p className="stock__item">Change Volume: {stock.volume}</p>
							</div>
						</li>
					))
				) : (
					<p>No Most Actively traded stock data available</p>
				)}
			</ul>
		</section>
	);
}
