import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Stocks from "./Pages/Stocks";
import Nfts from "./Pages/Nfts";
import NftDetails from "./Component/NftDetails/NftDetails";
import ExchangeList from "./Component/ExchangesList/ExchangesList";
import DerivativeExchangeList from "./Component/DerivativesExchanges/DerivativesExchanges";
import MarketNewsCrypto from "./Pages/Cryptocurrency-News";
import DerivativeList from "./Component/DerivativeList/DerivativeList";
import TopGainersAndLosers from "./Component/TopGainersAndLosers/TopGainersAndLosers";
import DataAboutBTC from "./Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import HomePage from "./Pages/HomePage";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

{
	/* <Route path="/" element={<Cryptocurrency />} />
				<Route path="/Stocks" element={<Stocks />} />
				<Route path="/Nfts" element={<Nfts />} />
				<Route path="/nft/:id" element={<NftDetails />} />
				<Route path="/exchangeList" element={<ExchangeList />} />
				<Route
					path="/DerivativeExchangeList"
					element={<DerivativeExchangeList />}
				/>
				<Route path="/DerivativeList" element={<DerivativeList />} />
				<Route path="/MarketNewsCrypto" element={<MarketNewsCrypto />} />
				<Route path="/TopGainersAndLosers" element={<TopGainersAndLosers />} />
				<Route path="/DataAboutCrypto" element={<DataAboutBTC />} /> */
}
