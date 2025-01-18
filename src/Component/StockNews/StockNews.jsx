import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StockNews.scss";
export default function StockNews() {
	const [news, setNews] = useState([]);
	const [showAll, setShowAll] = useState(false);
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

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	const stockNewShow = showAll ? news : news.slice(0, 3);
	return (
		<section className="stocknews">
			<ul>
				{stockNewShow.map((setNew) => {
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
				{news.length > 5 && (
					<button className="stocknews__button" onClick={handleToggle}>
						{showAll ? "View Less" : "View More"}
					</button>
				)}
			</ul>
		</section>
	);
}
