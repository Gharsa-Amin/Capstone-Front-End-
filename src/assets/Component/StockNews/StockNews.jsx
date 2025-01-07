import axios from "axios";
import { useState, useEffect } from "react";

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
		<section>
			<ul>
				{news.map((setNew) => {
					return (
						<li key={setNew.id}>
							<h2>{setNew.publisher.name}</h2>
							<p>{setNew.publisher.homepage_url}</p>
							<p>{setNew.title}</p>
							<p>{setNew.description}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
