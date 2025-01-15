import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
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
	const floorPrice = detailsNFTS?.floor_price?.native_currency;
	const marketCapinETh = detailsNFTS?.market_cap?.native_currency;
	const marketCapinUSD = detailsNFTS?.market_cap?.usd;
	const floorPrice7days = detailsNFTS?.floor_price_7d_percentage_change?.usd;
	const floorPrice14days = detailsNFTS?.floor_price_14d_percentage_change?.usd;
	const floorPrice30days = detailsNFTS?.floor_price_30d_percentage_change?.usd;
	const floorPrice60days = detailsNFTS?.floor_price_60d_percentage_change?.usd;
	const floorPrice1year = detailsNFTS?.floor_price_1y_percentage_change?.usd;
	const explorersList = detailsNFTS?.explorers?.map((explorer, index) => (
		<li key={index}>
			<a href={explorer.link} target="_blank" rel="noopener noreferrer">
				{explorer.name}
			</a>
		</li>
	));
	return (
		<section className="nft-details">
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

			<h2 className="nft-details__name">{detailsNFTS.name} Statistics</h2>
			{marketCapinETh ? (
				<p>MarketCap: {marketCapinETh} ETH</p>
			) : (
				<p>No data available</p>
			)}
			<p>Total Supply: {detailsNFTS.total_supply}</p>
			{marketCapinUSD ? (
				<p>MarketCap in USD: {marketCapinUSD} USD</p>
			) : (
				<p>No data available</p>
			)}
			<p>
				Number of Unique Addresses: {detailsNFTS.number_of_unique_addresses}
			</p>
			<p>
				Floor Price 24hour change in USD:
				{detailsNFTS.floor_price_in_usd_24h_percentage_change}
			</p>

			<p>Platform ID: {detailsNFTS.asset_platform_id}</p>
			<div>
				<ul>Transaction Explorers:{explorersList}</ul>
				<button>
					<a href="https://opensea.io/explore-collections">
						Click here to Purchase the NFT.
					</a>
				</button>
			</div>
			<p>{detailsNFTS.description}</p>
			<p>{detailsNFTS.native_currency}</p>

			{floorPrice7days ? (
				<p>floor price 7day percentage chang: {floorPrice7days} USD</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice14days ? (
				<p>floor price 14day percentage chang: {floorPrice14days} USD</p>
			) : (
				<p>No data available</p>
			)}

			{floorPrice30days ? (
				<p>floor price 30day percentage chang: {floorPrice30days} USD</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice60days ? (
				<p>floor price 60day percentage chang: {floorPrice60days} USD</p>
			) : (
				<p>No data available</p>
			)}
			{floorPrice1year ? (
				<p>floor price 1 Year percentage chang: {floorPrice1year} USD</p>
			) : (
				<p>No data available</p>
			)}
		</section>
	);
}
