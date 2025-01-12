import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CryptocurrencyDetails.scss";

export default function CryptocurrencyDetails() {
	const [coinDetails, setCoinDetails] = useState(null);
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
		fetchCoinDetails();
	}, [coinId]);

	if (!coinDetails) {
		return <p>"Coins loading..."</p>;
	} else {
		console.log(coinDetails);
		const {
			name,
			symbol,
			image,
			market_cap,
			price_change_percentage_24h,
			fully_diluted_valuation,
			total_volume,
			high_24h,
			low_24h,
			price_change_24h,
			market_cap_change_percentage_24h,
			circulating_supply,
			total_supply,
			current_price,
			ath,
			ath_date,
			atl,
			atl_date,
		} = coinDetails[0];
		return (
			<>
				<div>
					<div className="coin-list__section">
						<div className="coin-list__coinId">
							<div className="coin-list__header">
								<p className="coin-list__name">{name}</p>
								<p className="coin-list__name">{symbol}</p>
							</div>
							<img src={image} alt="Bitcoin Icon" width={70} />
						</div>
						{/* <Trading current_price={current_price} /> */}
					</div>
					<div className="coin-list__flex">
						<div className="coin-list__details">
							<div className="coin-list__div">
								<p className="coin-list__price">Market Cap: ${market_cap}</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__diluted-valuation">
									Full Diluted Valuation: ${fully_diluted_valuation}
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coint-list__total-volume">
									Total Volume: {total_volume}
								</p>
							</div>

							<div className="coin-list__div">
								<p className="coint-list__total-volume">
									Current Price: ${current_price}
								</p>
							</div>

							<div className="coin-list__div">
								<p className="coin-list__high24">24Hrs High: ${high_24h}</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__low24">24Hrs Low: ${low_24h}</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__price-change">
									Price Change in 24Hrs: ${price_change_24h}
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__percentage-change">
									{" "}
									Price Change in 24Hrs: {price_change_percentage_24h}%
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__cap-change">
									{" "}
									Market Cap Change: {market_cap_change_percentage_24h}%
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__circulating-supply">
									Circulating Supply: {circulating_supply}
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__total-supply">
									Total Supply: {total_supply}
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__total-supply">All Time High: ${ath}</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__total-supply">
									All Time High Date: {ath_date}
								</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__total-supply">All Time Low: ${atl}</p>
							</div>
							<div className="coin-list__div">
								<p className="coin-list__total-supply">
									All Time Low Date: {atl_date}
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
