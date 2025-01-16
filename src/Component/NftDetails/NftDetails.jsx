import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./NftDetails.scss";
export default function NftDetails() {
	const [detailsNFTS, setDetailsNFTS] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchNFTDetails = async () => {
			const url = `https://api.coingecko.com/api/v3/nfts/${id}?header=accept: application/json&x-cg-pro-api-key=CG-qu9NL3mTqThLPCP1KkwqNDwV`;
			try {
				const response = await axios.get(url);
				console.log(response.data);
				setDetailsNFTS(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchNFTDetails();
	}, [id]);
	if (!detailsNFTS) return <p>Loading...</p>;
	const imageUrl = detailsNFTS?.image?.small_2x;
	const floorPrice = detailsNFTS?.floor_price?.native_currency; //to fixed..
	const marketCapinETh = detailsNFTS?.market_cap?.native_currency;
	const marketCapinUSD = detailsNFTS?.market_cap?.usd.toFixed(3);
	const floorPrice7days =
		detailsNFTS?.floor_price_7d_percentage_change?.usd.toFixed(3);
	const floorPrice14days =
		detailsNFTS?.floor_price_14d_percentage_change?.usd.toFixed(3);
	const floorPrice30days =
		detailsNFTS?.floor_price_30d_percentage_change?.usd.toFixed(3);
	const floorPrice60days =
		detailsNFTS?.floor_price_60d_percentage_change?.usd.toFixed(3);
	const floorPrice1year =
		detailsNFTS?.floor_price_1y_percentage_change?.usd.toFixed(3);
	const explorersList = detailsNFTS?.explorers?.map((explorer, index) => (
		<li key={index}>
			<a href={explorer.link} target="_blank" rel="noopener noreferrer">
				{explorer.name}
			</a>
		</li>
	));
	return (
		<section className="nft-details">
			<div className="form__navigation">
				<Link className="form__link" to="/Nfts">
					List of All NFTs
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
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={detailsNFTS.name}
					style={{ width: "300px", height: "auto" }}
				/>
			) : (
				<p>No image available</p>
			)}
			<h2 className="nft-details__name">{detailsNFTS.name} Price</h2>
			{floorPrice ? <p> {floorPrice} ETH</p> : <p>No data available</p>}

			<h2 className="nft-details__name nft-details__name--modifier">
				{detailsNFTS.name} Statistics
			</h2>
			<div className="wrapper">
				<div>MarketCap:</div>
				{marketCapinETh ? (
					<p className="nft-details__marketCap">{marketCapinETh} ETH</p>
				) : (
					<p>No data available</p>
				)}
			</div>
			<div className="wrapper">
				<div>Total Supply: </div>
				<p className="nft-details__supply">{detailsNFTS.total_supply}</p>
			</div>
			<div className="wrapper">
				<div>MarketCap in USD:</div>
				{marketCapinUSD ? (
					<p className="nft-details__supply">{marketCapinUSD} USD</p>
				) : (
					<p>No data available</p>
				)}
			</div>
			<div className="wrapper">
				<div>Number of Unique Addresses: </div>
				<p className="nft-details__addresses">
					{detailsNFTS.number_of_unique_addresses}
				</p>
			</div>
			<div className="wrapper">
				<div>Floor Price 24hour change in USD:</div>
				<p className="nft-details__change">
					{detailsNFTS.floor_price_in_usd_24h_percentage_change}
				</p>
			</div>
			<div className="wrapper">
				<div>Platform ID: </div>
				<p className="nft-details__platform">{detailsNFTS.asset_platform_id}</p>
			</div>
			<ul>Transaction Explorers:{explorersList}</ul>
			<button>
				<a href="https://opensea.io/explore-collections">
					Click here to Purchase the NFT.
				</a>
			</button>

			<h2 className="nft-details__name"> What is {detailsNFTS.name}?</h2>
			<p>{detailsNFTS.description}</p>

			{floorPrice7days ? (
				<p>7day change: {floorPrice7days} %</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice14days ? (
				<p>14day change: {floorPrice14days} %</p>
			) : (
				<p>No data available</p>
			)}

			{floorPrice30days ? (
				<p>30day change: {floorPrice30days} %</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice60days ? (
				<p>60day change: {floorPrice60days} %</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice1year ? (
				<p>1 Year change: {floorPrice1year} %</p>
			) : (
				<p>No data available</p>
			)}
		</section>
	);
}
