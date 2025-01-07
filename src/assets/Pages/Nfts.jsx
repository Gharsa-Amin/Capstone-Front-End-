import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
export default function Nfts() {
	const [listNFTS, setListNFTS] = useState([]);

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

	return (
		<section>
			<ul>
				{listNFTS.map((listNFT) => {
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
			</ul>
		</section>
	);
}
