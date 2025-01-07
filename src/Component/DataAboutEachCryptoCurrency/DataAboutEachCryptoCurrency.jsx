import { useEffect, useState } from "react";
import axios from "axios";

export default function DataAboutBTC() {
	const [dataBTC, setDataBTC] = useState(null);

	useEffect(() => {
		const fetchBTC = async () => {
			const url = "http://localhost:5000/api/btc";
			try {
				const response = await axios.get(url, {});
				setDataBTC(response.data);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};

		fetchBTC();
	}, []);

	return (
		<section>
			{dataBTC ? <p>{dataBTC.description}</p> : <p>Loading Bitcoin data...</p>}
		</section>
	);
}
