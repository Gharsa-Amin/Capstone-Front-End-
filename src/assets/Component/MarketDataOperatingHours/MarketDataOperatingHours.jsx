import { useState, useEffect } from "react";
import axios from "axios";
export default function OperatingHours() {
	const [operatingHours, setOperatingHours] = useState([]);

	useEffect(() => {
		const fetchOperatingHours = async () => {
			const url =
				"https://api.polygon.io/v1/marketstatus/upcoming?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";
			try {
				const response = await axios.get(url);
				console.log(response.data);
				setOperatingHours(response.data);
			} catch (error) {
				console.error("Still loading :)");
			}
		};
		fetchOperatingHours();
	}, []);
	return (
		<>
			<section className="OperatingHours">
				<ul>
					{operatingHours.map((operatingHour) => (
						<div>
							<h2>{operatingHour.date}</h2>
							<p>{operatingHour.exchange}</p>
							<p>{operatingHour.name}</p>
							<p>{operatingHour.status}</p>
							<p>{operatingHour.close}</p>
							<p>{operatingHour.open}</p>
						</div>
					))}
				</ul>
			</section>
		</>
	);
}
