// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function TopGainersAndLosers() {
// 	const [gainer, setGainers] = useState(null);

// 	useEffect(() => {
// 		const fetchTopGainersLosers = async () => {
// 			const url =
// 				"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=3EQWSFLTSX6L5S6M";
// 			try {
// 				const response = await axios.get(url);
// 				console.log(response.data); // Make sure you check the actual structure of the response
// 				setGainers(response.data);
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};
// 		fetchTopGainersLosers();
// 	}, []);

// 	// Conditional rendering if 'gainer' is null
// 	if (!gainer) {
// 		return <div>Loading...</div>;
// 	}

// 	return (
// 		<section>
// 			{/* Top Gainers */}
// 			<ul>
// 				{gainer.top_gainers && gainer.top_gainers.length > 0 ? (
// 					gainer.top_gainers.map((stock, index) => (
// 						<li key={index}>
// 							<p>Ticker: {stock.ticker}</p>
// 							<p>Price: {stock.price}</p>
// 							<p>Change Amount: {stock.change_amount}</p>
// 							<p>Change Percentage: {stock.change_percentage}</p>
// 							<p>Change Volume: {stock.volume}</p>
// 						</li>
// 					))
// 				) : (
// 					<p>No gainers data available</p>
// 				)}
// 			</ul>

// 			{/* Top Losers */}
// 			<ul>
// 				{gainer.top_losers && gainer.top_losers.length > 0 ? (
// 					gainer.top_losers.map((stock, index) => (
// 						<li key={index}>
// 							<p>Ticker: {stock.ticker}</p>
// 							<p>Price: {stock.price}</p>
// 							<p>Change Amount: {stock.change_amount}</p>
// 							<p>Change Percentage:{stock.change_percentage}</p>
// 							<p>Change Volume: {stock.volume}</p>
// 						</li>
// 					))
// 				) : (
// 					<p>No losers data available</p>
// 				)}
// 			</ul>
// 		</section>
// 	);
// }
import axios from "axios";
import { useEffect, useState } from "react";

export default function TopGainersAndLosers() {
	const [gainer, setGainers] = useState(null);

	useEffect(() => {
		const fetchTopGainersLosers = async () => {
			const url =
				"https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=3EQWSFLTSX6L5S6M";
			try {
				const response = await axios.get(url);
				console.log("API Response:", response); // Log the full response to inspect the structure

				// If the response contains error or empty data
				if (response.data.error) {
					console.error("API Error:", response.data.error);
					setGainers({ top_gainers: [], top_losers: [] }); // Fallback empty data
				} else if (response.data.top_gainers && response.data.top_losers) {
					setGainers(response.data); // Assuming this is the correct structure
				} else {
					console.error(
						"Unexpected response structure or no data available:",
						response.data
					);
					setGainers({ top_gainers: [], top_losers: [] }); // Fallback empty data
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setGainers({ top_gainers: [], top_losers: [] }); // Fallback empty data in case of an error
			}
		};
		fetchTopGainersLosers();
	}, []);

	// Loading state
	if (!gainer) {
		return <div>Loading...</div>;
	}

	return (
		<section>
			{/* Top Gainers */}
			<ul>
				{gainer.top_gainers?.length > 0 ? (
					gainer.top_gainers.map((stock, index) => (
						<li key={index}>
							<p>Ticker: {stock.ticker}</p>
							<p>Price: {stock.price}</p>
							<p>Change Amount: {stock.change_amount}</p>
							<p>Change Percentage: {stock.change_percentage}</p>
							<p>Change Volume: {stock.volume}</p>
						</li>
					))
				) : (
					<p>No gainers data available</p>
				)}
			</ul>

			{/* Top Losers */}
			<ul>
				{gainer.top_losers?.length > 0 ? (
					gainer.top_losers.map((stock, index) => (
						<li key={index}>
							<p>Ticker: {stock.ticker}</p>
							<p>Price: {stock.price}</p>
							<p>Change Amount: {stock.change_amount}</p>
							<p>Change Percentage: {stock.change_percentage}</p>
							<p>Change Volume: {stock.volume}</p>
						</li>
					))
				) : (
					<p>No losers data available</p>
				)}
			</ul>
		</section>
	);
}
