import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cryptocurrency from "./assets/Pages/Cryptocurrency";
import Stocks from "./assets/Pages/Stocks";
import Nfts from "./assets/Pages/Nfts";
import NftDetails from "./assets/Component/NftDetails/NftDetails";
import ExchangeList from "./assets/Component/ExchangesList/ExchangesList";
import DerivativeExchangeList from "./assets/Component/DerivativesExchanges/DerivativesExchanges";
import MarketNewsCrypto from "./assets/Pages/Cryptocurrency-News";
import DerivativeList from "./assets/Component/DerivativeList/DerivativeList";
import TopGainersAndLosers from "./assets/Component/TopGainersAndLosers/TopGainersAndLosers";
import DataAboutBTC from "./assets/Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Cryptocurrency />} />
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
				<Route path="/DataAboutCrypto" element={<DataAboutBTC />} />
			</Routes>
		</BrowserRouter>
	);
}
