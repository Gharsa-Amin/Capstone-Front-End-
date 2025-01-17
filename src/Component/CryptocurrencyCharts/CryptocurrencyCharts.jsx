import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./CryptocurrencyCharts.scss";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import DataAboutEachCryptoCurrency from "../DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";

export default function CryptocurrencyCharts() {
	const [coinDetails, setCoinDetails] = useState(null);
	const [priceData, setPriceData] = useState([]);
	const [priceData7Days, setPriceData7Days] = useState([]);
	const [priceData30Days, setPriceData30Days] = useState([]);
	const [priceData60Days, setPriceData60Days] = useState([]);
	const [selectedTimeframe, setSelectedTimeframe] = useState("1h"); // Track selected timeframe
	const params = useParams();
	const coinId = params.coinId;

	useEffect(() => {
		const fetchCoinDetails = async () => {
			const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5`;
			try {
				const response = await axios.get(URL);
				console.log(response.data);
				setCoinDetails(response.data);
			} catch (error) {
				console.error("Error fetching coins:", error);
			}
		};

		const fetchPriceHistory = async () => {
			const historyURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=1`;
			try {
				const historyResponse = await axios.get(historyURL);
				console.log(historyResponse.data);

				const priceHistory = historyResponse.data.prices.map((price) => ({
					time: new Date(price[0]).toLocaleTimeString(),
					price: price[1],
				}));

				setPriceData(priceHistory);
			} catch (error) {
				console.error("Error fetching historical price data:", error);
			}
		};

		const fetchPriceHistory7Days = async () => {
			const historyURL7Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=7`;
			try {
				const historyResponse7Days = await axios.get(historyURL7Days);
				console.log(historyResponse7Days.data);

				const priceHistory7Days = historyResponse7Days.data.prices.map(
					(price) => ({
						time: new Date(price[0]).toLocaleDateString(),
						price: price[1],
					})
				);

				setPriceData7Days(priceHistory7Days);
			} catch (error) {
				console.error("Error fetching historical price data:", error);
			}
		};

		const fetchPriceHistory1month = async () => {
			const historyURL30Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=30`;
			try {
				const historyResponse30Days = await axios.get(historyURL30Days);
				console.log(historyResponse30Days.data);

				const priceHistory30Days = historyResponse30Days.data.prices.map(
					(price) => ({
						time: new Date(price[0]).toLocaleDateString(),
						price: price[1],
					})
				);

				setPriceData30Days(priceHistory30Days);
			} catch (error) {
				console.error("Error fetching historical price data:", error);
			}
		};

		const fetchPriceHistory2month = async () => {
			const historyURL60Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=360`;
			try {
				const historyResponse60Days = await axios.get(historyURL60Days);
				console.log(historyResponse60Days.data);

				const priceHistory60Days = historyResponse60Days.data.prices.map(
					(price) => ({
						time: new Date(price[0]).toLocaleDateString(),
						price: price[1],
					})
				);

				setPriceData60Days(priceHistory60Days);
			} catch (error) {
				console.error("Error fetching historical price data:", error);
			}
		};

		fetchCoinDetails();
		fetchPriceHistory();
		fetchPriceHistory7Days();
		fetchPriceHistory1month();
		fetchPriceHistory2month();
	}, [coinId]);

	if (!coinDetails) {
		return <p>Coins loading...</p>;
	} else {
		const { name, symbol, image, current_price } = coinDetails[0];

		const handleTimeframeClick = (timeframe) => {
			setSelectedTimeframe(timeframe);
		};

		return (
			<>
				<div className="coin-list__section">
					<Link className="form__link" to="/Crypto">
						List of All 35+❤️ Cryptocurrencies
						<svg
							className="form__arrow-back"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
								fill="#2E66E6"
							/>
						</svg>
					</Link>
					<div className="coin-list__coinId">
						<div className="coin-list__header">
							<p className="coin-list__name">
								{name}({symbol})
							</p>
							<img
								className="coin-list__image"
								src={image}
								alt={`${name} Icon`}
								width={30}
							/>
						</div>
						<p className="coin-list__price">Current Price: ${current_price}</p>
					</div>
					<Link to="/trading">
						<button className="homepage__button homepage__button-modifier">
							Get started
						</button>
					</Link>
					{/* Timeframe Buttons */}
					<div className="coin-list__timeframes">
						<div onClick={() => handleTimeframeClick("1h")}>1H</div>
						<div onClick={() => handleTimeframeClick("7d")}>7D</div>
						<div onClick={() => handleTimeframeClick("1m")}>1M</div>
						<div onClick={() => handleTimeframeClick("1y")}>1Y</div>
						<div onClick={() => handleTimeframeClick("5y")}>5+Y</div>
					</div>
				</div>

				{/* Price Data Line Chart */}
				<div className="coin-list__chart">
					{selectedTimeframe === "1h" && (
						<ResponsiveContainer width="100%" height={300}>
							<LineChart data={priceData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="price" stroke="#8884d8" />
							</LineChart>
						</ResponsiveContainer>
					)}

					{selectedTimeframe === "7d" && (
						<ResponsiveContainer width="100%" height={300}>
							<LineChart data={priceData7Days}>
								<CartesianGrid strokeDasharray="4 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="price" stroke="#8884d8" />
							</LineChart>
						</ResponsiveContainer>
					)}

					{selectedTimeframe === "1m" && (
						<ResponsiveContainer width="100%" height={300}>
							<LineChart data={priceData30Days}>
								<CartesianGrid strokeDasharray="4 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="price" stroke="#8884d8" />
							</LineChart>
						</ResponsiveContainer>
					)}

					{selectedTimeframe === "1y" && (
						<ResponsiveContainer width="100%" height={300}>
							<LineChart data={priceData60Days}>
								<CartesianGrid strokeDasharray="4 3" />
								<XAxis dataKey="time" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line
									dataKey="price"
									stroke="#42a5f5"
									strokeWidth={2}
									dot={{ stroke: "#42a5f5", strokeWidth: 2, r: 5 }}
									activeDot={{ r: 8 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					)}
				</div>
				<DataAboutEachCryptoCurrency />
			</>
		);
	}
}
