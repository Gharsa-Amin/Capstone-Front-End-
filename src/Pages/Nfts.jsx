import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
export default function Nfts() {
	const [listNFTS, setListNFTS] = useState([]);
	const [showAll, setShowAll] = useState(false);
	useEffect(() => {
		const fetchNFTs = async () => {
			const url =
				"https://api.coingecko.com/api/v3/nfts/list/?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV";

			try {
				const response = await axios.get(url);
				console.log(response.data);
				setListNFTS(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchNFTs();
	}, []);

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	const showAllNfts = showAll ? listNFTS : listNFTS.slice(0, 3);

	return (
		<section>
			<ul>
				{showAllNfts.map((listNFT) => {
					return (
						<li key={listNFT.id}>
							<p>Name of the NFT: {listNFT.name}</p>
							<p>Contract Address: {listNFT.contract_address}</p>
							<p>NFT Asset Platform Id: {listNFT.asset_platform_id}</p>
							{/* <p>{listNFT.symbol}</p> */}
							<Link to={`/nft/${listNFT.id}`}>View Details</Link>
						</li>
					);
				})}
				{listNFTS.length > 5 && (
					<button onClick={handleToggle}>
						{showAll ? "View Less" : "View More"}
					</button>
				)}
			</ul>
		</section>
	);
}
