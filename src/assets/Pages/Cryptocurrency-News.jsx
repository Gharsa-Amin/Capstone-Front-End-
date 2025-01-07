import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function MarketNewsCrypto() {
	const [listMarket, setListMarket] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			const url =
				"https://www.alphavantage.co/query?function=NEWS_SENTIMENT&CRYPTO:BTC,SOL,ETH,XRP,BNB,ADA&time_from=20220410T0130&limit=1000&apikey=3EQWSFLTSX6L5S6M";

			try {
				const response = await axios.get(url);
				console.log(response.data);

				setListMarket(response.data.feed || []);
			} catch (error) {
				console.error("Error fetching market news:", error);
			}
		};

		fetchNews();
	}, []);

	return (
		<section>
			<ul>
				{listMarket.map((newsItem, index) => (
					<li key={index}>
						<p>Title: {newsItem.title}</p>
						<p>Published: {newsItem.time_published}</p>
						<p>Summary: {newsItem.summary}</p>
						<p>Sentiment: {newsItem.overall_sentiment_label}</p>
						<p>Source: {newsItem.source}</p>
						<Link to={newsItem.url} target="_blank">
							Read More
						</Link>
						<div>
							{newsItem.banner_image && (
								<img src={newsItem.banner_image} alt={newsItem.title} />
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
