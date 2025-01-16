import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import image7 from "../../assets/images/icons/pudgy penguin--.jpg";
import "./Nfts.scss";
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
			<div className="form__navigation">
				<Link className="form__link" to="/">
					HomePage
					<svg
						className="form__arrow-back"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
							fill="#2E66E6"
						/>
					</svg>
				</Link>
			</div>
			<p>This pengu loves you A lot, more than the sky </p>
			<img src={image7} alt="" />
			<ul className="nfts">
				{showAllNfts.map((listNFT) => {
					return (
						<li className="nfts__list" key={listNFT.id}>
							<p className="nfts__name">Name of the NFT: {listNFT.name}</p>
							<p className="nfts__contract">
								Contract Address: {listNFT.contract_address}
							</p>
							<p className="nfts__platform">
								NFT Asset Platform: {listNFT.asset_platform_id}
							</p>

							<Link className="nfts__link" to={`/nft/${listNFT.id}`}>
								View Details
							</Link>
						</li>
					);
				})}
				{listNFTS.length > 5 && (
					<button className="form__button" onClick={handleToggle}>
						{showAll ? "View Less" : "View More"}
					</button>
				)}
			</ul>
		</section>
	);
}
