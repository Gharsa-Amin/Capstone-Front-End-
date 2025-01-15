import { useState, useEffect } from "react";
import axios from "axios";
import "./MarketDataOperatingHours.scss";
export default function OperatingHours() {
	const [operatingHours, setOperatingHours] = useState([]);
	const [selectedDate, setSelectedDate] = useState("");
	const [filteredHours, setFilteredHours] = useState([false]);

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

	// Get unique dates from the operatingHours
	const uniqueDates = [...new Set(operatingHours.map((item) => item.date))];

	// Filter operating hours based on selected date
	useEffect(() => {
		if (selectedDate) {
			const filtered = operatingHours.filter(
				(item) => item.date === selectedDate
			);
			setFilteredHours(filtered);
		} else {
			setFilteredHours(operatingHours);
		}
	}, [selectedDate, operatingHours]);

	return (
		<>
			<section className="OperatingHours">
				<h2>Market Wide Holidays </h2>
				<label htmlFor="date">Select a Date: </label>
				<select
					id="date"
					value={selectedDate}
					onChange={(e) => setSelectedDate(e.target.value)}
				>
					<option value="">All Dates</option>
					{uniqueDates.map((date) => (
						<option key={date} value={date}>
							{date}
						</option>
					))}
				</select>

				{/* Display filtered operating hours */}
				<ul className="operatinghours">
					{filteredHours.map((operatingHour) => (
						<li key={operatingHour.date + operatingHour.exchange}>
							<p className="operatinghours__date">{operatingHour.date}</p>
							<div className="operatinghours__wrapper">
								<p className="operatinghours__exchange">
									Exchange: {operatingHour.exchange}
								</p>
								<p className="operatinghours__holiday">
									Holiday: {operatingHour.name}
								</p>
								<p className="operatinghours__status">
									Status: {operatingHour.status}
								</p>
								<p>{operatingHour.close}</p>
								<p>{operatingHour.open}</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
