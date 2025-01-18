import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./CryptocurrencyList.scss";
import image5 from "../../assets/images/icons/pexels-anna-nekrashevich-6802042.jpg";
import DefiMarketCap from "../DefiMarketCap/DefiMarketCap";

export default function CoinList() {
	const [coins, setCoins] = useState([]); // State to toggle visibility of coins
	const [showAll, setShowAll] = useState(false);
	useEffect(() => {
		const fetchCoins = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";
			try {
				const response = await axios.get(URL);
				console.log(response.data);
				setCoins(response.data);
			} catch (error) {
				console.error("Error fetching coins:", error);
			}
		};
		fetchCoins();
	}, []);

	// Function to toggle "view more" behavior

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	const coinsToShow = showAll ? coins : coins.slice(0, 4);
	// Determine which coins to show based on `showAll` state
	return (
		<>
			<section className="coin-list">
				<div className="form__navigation">
					<Link className="form__link" to="/">
						HomePage
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
				</div>
				<DefiMarketCap />
				<div className="coin-list__wrapper">
					<img className="coin-list__hero-image" src={image5} alt="" />
				</div>

				<Link to="/trading">
					<button className="homepage__button homepage__button-modifier">
						Start Trading
					</button>
				</Link>

				{coins.length > 0 ? (
					<div className="coin-list__container">
						{coinsToShow.map((coin) => (
							<Link
								key={coin.id}
								to={`/coins/${coin.id}`}
								className="coin-list__item"
							>
								<img
									className="coin-list__image"
									src={coin.image}
									alt={coin.name}
									width={50}
									height={50}
								/>
								<h2 className="coin-list__name">{coin.name}</h2>
								<p className="coin-list__symbol">
									({coin.symbol.toUpperCase()})
								</p>
								<p className="coin-list__price">{coin.current_price}</p>
							</Link>
						))}
						{/* Button to toggle show more coins */}
						{coins.length > 5 && (
							<button className="coin-list__view-more" onClick={handleToggle}>
								{showAll ? "View Less" : "View More"}
							</button>
						)}
					</div>
				) : (
					<p>Loading coins...</p>
				)}
			</section>
		</>
	);
}
