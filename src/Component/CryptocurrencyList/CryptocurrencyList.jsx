import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./CryptocurrencyList.scss";

export default function CoinList() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		const fetchCoins = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad";
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

	return (
		<section className="coin-list">
			{coins.length > 0 ? (
				<div className="coin-list__container">
					{coins.map((coin) => (
						<Link key={coin.id} to="/" className="coin-list__item">
							<img
								className="coin-list__image"
								src={coin.image}
								alt={coin.name}
								width={50}
								height={50}
							/>
							<h2 className="coin-list__name">{coin.name}</h2>
							<p className="coin-list__symbol">({coin.symbol.toUpperCase()})</p>
							<p className="coin-list__price">{coin.current_price}</p>
						</Link>
					))}
				</div>
			) : (
				<p>Loading coins...</p>
			)}
		</section>
	);
}
