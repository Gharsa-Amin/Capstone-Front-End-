import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./CryptoNews.scss";
export default function CryptoNews() {
	const [listMarket, setListMarket] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			const url =
				"https://www.alphavantage.co/query?function=NEWS_SENTIMENT&CRYPTO:BTC,SOL,ETH,XRP,BNB,ADA&time_from=20220410T0130&limit=30&apikey=3EQWSFLTSX6L5S6M";

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
		<section className="news">
			<h3>News</h3>
			<ul>
				{listMarket.map((newsItem, index) => (
					<li key={index}>
						<div className="news-wrapper">
							{newsItem.banner_image && (
								<img
									className="news-image"
									src={newsItem.banner_image}
									alt={newsItem.title}
								/>
							)}

							<Link to={newsItem.url} target="_blank">
								<p>Title: {newsItem.title}</p>
							</Link>
						</div>
						{/* <p>Published: {newsItem.time_published}</p> */}
						<p className="news-summary"> {newsItem.summary}</p>
						<div className="news-top-sentiment">
							<p className="news-sentiment">
								Sentiment: {newsItem.overall_sentiment_label}
							</p>
							<p className="news-source">Source: {newsItem.source}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
