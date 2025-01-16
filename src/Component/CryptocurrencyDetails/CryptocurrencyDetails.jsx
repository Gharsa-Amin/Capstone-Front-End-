import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import "./CryptocurrencyDetails.scss";
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

export default function CryptocurrencyDetails() {
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

		// Function to handle timeframe click
		const handleTimeframeClick = (timeframe) => {
			setSelectedTimeframe(timeframe);
		};

		return (
			<>
				<div className="coin-list__section">
					<div className="coin-list__coinId">
						<div className="coin-list__header">
							<p className="coin-list__name">{name}</p>
							<p className="coin-list__name">({symbol})</p>
						</div>
						<img src={image} alt={`${name} Icon`} width={30} />
					</div>

					{/* Timeframe Buttons */}
					<div className="coin-list__timeframes">
						<button onClick={() => handleTimeframeClick("1h")}>1H</button>
						<button onClick={() => handleTimeframeClick("7d")}>7D</button>
						<button onClick={() => handleTimeframeClick("1m")}>1M</button>
						<button onClick={() => handleTimeframeClick("1y")}>1Y</button>
						<button onClick={() => handleTimeframeClick("5y")}>5+Y</button>
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

				{/* Other Coin Details */}
				<div className="coin-list__flex">
					<div className="coin-list__details">
						<div className="coin-list__div">
							<p className="coin-list__price">
								Current Price: ${current_price}
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

// import axios from "axios";
// import { useEffect, useState } from "react";
// import React from "react";
// import { useParams } from "react-router-dom";
// import "./CryptocurrencyDetails.scss";
// import {
// 	LineChart,
// 	Line,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// } from "recharts";

// import "./CryptocurrencyDetails.scss";

// export default function CryptocurrencyDetails() {
// 	const [coinDetails, setCoinDetails] = useState(null);
// 	const [priceData, setPriceData] = useState([]);
// 	const [priceData7Days, setPriceData7Days] = useState([]);
// 	const [priceData30Days, setPriceData30Days] = useState([]);
// 	const [priceData60Days, setPriceData60Days] = useState([]);
// 	const params = useParams();
// 	const coinId = params.coinId;

// 	useEffect(() => {
// 		const fetchCoinDetails = async () => {
// 			const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5`;
// 			try {
// 				const response = await axios.get(URL);
// 				console.log(response.data);
// 				setCoinDetails(response.data);
// 			} catch (error) {
// 				console.error("Error fetching coins:", error);
// 			}
// 		};

// 		const fetchPriceHistory = async () => {
// 			const historyURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=1`;
// 			try {
// 				const historyResponse = await axios.get(historyURL);
// 				console.log(historyResponse.data);

// 				const priceHistory = historyResponse.data.prices.map((price) => ({
// 					time: new Date(price[0]).toLocaleTimeString(),
// 					price: price[1],
// 				}));

// 				setPriceData(priceHistory);
// 			} catch (error) {
// 				console.error("Error fetching historical price data:", error);
// 			}
// 		};
// 		const fetchPriceHistory7Days = async () => {
// 			const historyURL7Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=7`;
// 			try {
// 				const historyResponse7Days = await axios.get(historyURL7Days);
// 				console.log(historyResponse7Days.data);

// 				const priceHistory7Days = historyResponse7Days.data.prices.map(
// 					(price) => ({
// 						time: new Date(price[0]).toLocaleDateString(),
// 						price: price[1],
// 					})
// 				);

// 				setPriceData7Days(priceHistory7Days);
// 			} catch (error) {
// 				console.error("Error fetching historical price data:", error);
// 			}
// 		};
// 		const fetchPriceHistory1month = async () => {
// 			const historyURL30Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=30`;
// 			try {
// 				const historyResponse30Days = await axios.get(historyURL30Days);
// 				console.log(historyResponse30Days.data);

// 				const priceHistory30Days = historyResponse30Days.data.prices.map(
// 					(price) => ({
// 						time: new Date(price[0]).toLocaleDateString(),
// 						price: price[1],
// 					})
// 				);

// 				setPriceData30Days(priceHistory30Days);
// 			} catch (error) {
// 				console.error("Error fetching historical price data:", error);
// 			}
// 		};
// 		const fetchPriceHistory2month = async () => {
// 			const historyURL60Days = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=cad&days=360`;
// 			try {
// 				const historyResponse60Days = await axios.get(historyURL60Days);
// 				console.log(historyResponse60Days.data);

// 				const priceHistory60Days = historyResponse60Days.data.prices.map(
// 					(price) => ({
// 						time: new Date(price[0]).toLocaleDateString(),
// 						price: price[1],
// 					})
// 				);

// 				setPriceData60Days(priceHistory60Days);
// 			} catch (error) {
// 				console.error("Error fetching historical price data:", error);
// 			}
// 		};
// 		fetchCoinDetails();
// 		fetchPriceHistory();
// 		fetchPriceHistory7Days();
// 		fetchPriceHistory1month();
// 		fetchPriceHistory2month();
// 	}, [coinId]);

// 	if (!coinDetails) {
// 		return <p>Coins loading...</p>;
// 	} else {
// 		const { name, symbol, image, current_price } = coinDetails[0];

// 		return (
// 			<>
// 				<div className="coin-list__section">
// 					<div className="coin-list__coinId">
// 						<div className="coin-list__header">
// 							<p className="coin-list__name">{name}</p>
// 							<p className="coin-list__name">({symbol})</p>
// 						</div>
// 						<img src={image} alt={`${name} Icon`} width={30} />
// 					</div>
// 					<div>1H</div>
// 					<div>7D</div>
// 					<div>1M</div>
// 					<div>1Y</div>
// 					<div>5+Y</div>
// 				</div>

// 				{/* Price Data Line Chart */}
// 				<div className="coin-list__chart">
// 					<ResponsiveContainer width="100%" height={300}>
// 						<LineChart data={priceData}>
// 							<CartesianGrid strokeDasharray="3 3" />
// 							<XAxis dataKey="time" />
// 							<YAxis />
// 							<Tooltip />
// 							<Legend />
// 							<Line type="monotone" dataKey="price" stroke="#8884d8" />
// 						</LineChart>
// 					</ResponsiveContainer>
// 				</div>

// 				<div className="coin-list__chart">
// 					<ResponsiveContainer width="100%" height={300}>
// 						<LineChart data={priceData7Days}>
// 							<CartesianGrid strokeDasharray="4 3" />
// 							<XAxis dataKey="time" />
// 							<YAxis />
// 							<Tooltip />
// 							<Legend />
// 							<Line type="monotone" dataKey="price" stroke="#8884d8" />
// 						</LineChart>
// 					</ResponsiveContainer>
// 				</div>

// 				<div className="coin-list__chart">
// 					<ResponsiveContainer width="100%" height={300}>
// 						<LineChart data={priceData30Days}>
// 							<CartesianGrid strokeDasharray="4 3" />
// 							<XAxis dataKey="time" />
// 							<YAxis />
// 							<Tooltip />
// 							<Legend />
// 							<Line type="monotone" dataKey="price" stroke="#8884d8" />
// 						</LineChart>
// 					</ResponsiveContainer>
// 				</div>

// 				<div className="coin-list__chart">
// 					<ResponsiveContainer width="100%" height={300}>
// 						<LineChart data={priceData60Days}>
// 							<CartesianGrid strokeDasharray="4 3" />
// 							<XAxis dataKey="time" />
// 							<YAxis />
// 							<Tooltip />
// 							<Legend />
// 							<Line
// 								// type="monotone"
// 								dataKey="price"
// 								stroke="#42a5f5"
// 								strokeWidth={2}
// 								dot={{ stroke: "#42a5f5", strokeWidth: 2, r: 5 }}
// 								activeDot={{ r: 8 }}
// 							/>
// 						</LineChart>
// 					</ResponsiveContainer>
// 				</div>

// 				{/* Other Coin Details */}
// 				<div className="coin-list__flex">
// 					<div className="coin-list__details">
// 						<div className="coin-list__div">
// 							<p className="coin-list__price">
// 								Current Price: ${current_price}
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import "./CryptocurrencyDetails.scss";

// export default function CryptocurrencyDetails() {
// 	const [coinDetails, setCoinDetails] = useState(null);
// 	const params = useParams();
// 	const coinId = params.coinId;

// 	useEffect(() => {
// 		const fetchCoinDetails = async () => {
// 			const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5`;
// 			try {
// 				const response = await axios.get(URL);
// 				console.log(response.data);
// 				setCoinDetails(response.data);
// 			} catch (error) {
// 				console.error("Error fetching coins:", error);
// 			}
// 		};
// 		fetchCoinDetails();
// 	}, [coinId]);

// 	if (!coinDetails) {
// 		return <p>"Coins loading..."</p>;
// 	} else {
// 		console.log(coinDetails);
// 		const {
// 			name,
// 			symbol,
// 			image,
// 			market_cap,
// 			price_change_percentage_24h,
// 			fully_diluted_valuation,
// 			total_volume,
// 			high_24h,
// 			low_24h,
// 			price_change_24h,
// 			market_cap_change_percentage_24h,
// 			circulating_supply,
// 			total_supply,
// 			current_price,
// 			ath,
// 			ath_date,
// 			atl,
// 			atl_date,
// 		} = coinDetails[0];
// 		return (
// 			<>
// 				<div>
// 					<div className="coin-list__section">
// 						<div className="coin-list__coinId">
// 							<div className="coin-list__header">
// 								<p className="coin-list__name">{name}</p>
// 								<p className="coin-list__name">{symbol}</p>
// 							</div>
// 							<img src={image} alt="Bitcoin Icon" width={70} />
// 						</div>
// 						{/* <Trading current_price={current_price} /> */}
// 					</div>
// 					<div className="coin-list__flex">
// 						<div className="coin-list__details">
// 							<div className="coin-list__div">
// 								<p className="coin-list__price">Market Cap: ${market_cap}</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__diluted-valuation">
// 									Full Diluted Valuation: ${fully_diluted_valuation}
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coint-list__total-volume">
// 									Total Volume: {total_volume}
// 								</p>
// 							</div>

// 							<div className="coin-list__div">
// 								<p className="coint-list__total-volume">
// 									Current Price: ${current_price}
// 								</p>
// 							</div>

// 							<div className="coin-list__div">
// 								<p className="coin-list__high24">24Hrs High: ${high_24h}</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__low24">24Hrs Low: ${low_24h}</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__price-change">
// 									Price Change in 24Hrs: ${price_change_24h}
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__percentage-change">
// 									{" "}
// 									Price Change in 24Hrs: {price_change_percentage_24h}%
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__cap-change">
// 									{" "}
// 									Market Cap Change: {market_cap_change_percentage_24h}%
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__circulating-supply">
// 									Circulating Supply: {circulating_supply}
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__total-supply">
// 									Total Supply: {total_supply}
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__total-supply">All Time High: ${ath}</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__total-supply">
// 									All Time High Date: {ath_date}
// 								</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__total-supply">All Time Low: ${atl}</p>
// 							</div>
// 							<div className="coin-list__div">
// 								<p className="coin-list__total-supply">
// 									All Time Low Date: {atl_date}
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }
