import axios from "axios";
import { useEffect, useState } from "react";

export default function Market() {
	const [openings, setOpenings] = useState({
		afterHours: true,
		earlyHours: false,
		currencies: {},
		exchanges: {},
		indicesGroups: {},
	});

	useEffect(() => {
		const fetchMarketHours = async () => {
			const url =
				"https://api.polygon.io/v1/marketstatus/now?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setOpenings({
					afterHours: response.data.afterHours,
					earlyHours: response.data.earlyHours,
					currencies: response.data.currencies,
					exchanges: response.data.exchanges,
					market: response.data.market,
					indicesGroups: response.data.indicesGroups,
				});
			} catch (error) {
				console.error(error);
			}
		};
		fetchMarketHours();
	}, []);

	return (
		<section>
			<div>
				<div>
					<h3>Currencies</h3>
					<div>
						After Hours: {openings.afterHours ? "false" : "true"}
						<ul>
							{Object.entries(openings.currencies).map(([currency, status]) => (
								<li key={currency}>
									<strong>{currency}</strong>: {status}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<div>
						Early Hours: {openings.earlyHours ? "open" : "closed"}
						<h3>Exchanges</h3>
						<ul>
							{Object.entries(openings.exchanges).map(([exchange, status]) => (
								<li key={exchange}>
									<strong>{exchange}</strong>: {status}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div>
					<h3>IndicesGroup</h3>
					<ul>
						{Object.entries(openings.indicesGroups).map(
							([indicesGroup, status]) => (
								<li key={indicesGroup}>
									<strong>{indicesGroup}</strong>: {status}
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</section>
	);
}
