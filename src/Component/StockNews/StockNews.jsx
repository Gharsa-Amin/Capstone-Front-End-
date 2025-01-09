import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StockNews.scss";
export default function StockNews() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchStockNews = async () => {
			const url =
				"https://api.polygon.io/v2/reference/news?limit=100&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";
			try {
				const response = await axios.get(url);
				console.log(response.data.results);
				setNews(response.data.results);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchStockNews();
	}, []);

	return (
		<section className="stocknews">
			<ul>
				{news.map((setNew) => {
					return (
						<li key={setNew.id}>
							<div className="stocknews-wrapper">
								<Link to={setNew.publisher.homepage_url} target="blank">
									<p className="stocknews-publisher">{setNew.publisher.name}</p>{" "}
								</Link>
								<p className="stocknews-title">{setNew.title}</p>
							</div>
							<p className="stocknews-description">{setNew.description}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
