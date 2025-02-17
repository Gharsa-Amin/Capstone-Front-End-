import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./CryptoNews.scss";
export default function CryptoNews() {
	const [listMarket, setListMarket] = useState([]);
	const [showAll, setShowAll] = useState(false);
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

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	const newsToShow = showAll ? listMarket : listMarket.slice(0, 3);
	return (
		<section className="news">
			<h3 className="news-header">News</h3>
			<ul>
				{newsToShow.map((newsItem, index) => (
					<li key={index}>
						<div className="news-wrapper">
							{newsItem.banner_image && (
								<img
									className="news-images"
									src={newsItem.banner_image}
									alt={newsItem.title}
								/>
							)}

							<Link to={newsItem.url} target="_blank">
								<p className="news-title">Title: {newsItem.title}</p>
							</Link>
						</div>

						<p className="news-summary"> {newsItem.summary}</p>
						<div className="news-top-sentiment">
							<p className="news-sentiment">
								Sentiment: {newsItem.overall_sentiment_label}
							</p>
							<p className="news-source">Source: {newsItem.source}</p>
						</div>
					</li>
				))}
				{listMarket.length > 5 && (
					<button className="coin-list__view-more" onClick={handleToggle}>
						{showAll ? "View Less" : "View More"}
					</button>
				)}
			</ul>
		</section>
	);
}
