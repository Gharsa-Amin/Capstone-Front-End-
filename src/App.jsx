import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Stocks from "./Pages/Stocks";
import Nfts from "./Pages/Nfts";
import NftDetails from "./Component/NftDetails/NftDetails";
import ExchangeList from "./Component/ExchangesList/ExchangesList";
import DerivativeExchangeList from "./Component/DerivativesExchanges/DerivativesExchanges";
import DerivativeList from "./Component/DerivativeList/DerivativeList";
import TopGainersAndLosers from "./Component/TopGainersAndLosers/TopGainersAndLosers";
import DataAboutBTC from "./Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import HomePage from "./Pages/HomePage";
import Footer from "./Component/Footer/Footer";
import SignUpForm from "./Component/SignUpForm/SignUpForm";
import OnboardingForm from "./Component/OnboardingForm/OnboardingForm";
import CryptocurrencyDetails from "./Component/CryptocurrencyDetails/CryptocurrencyDetails";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Crypto" element={<Cryptocurrency />} />
				<Route path="/coins/:coinId" element={<CryptocurrencyDetails />} />
				<Route path="/Stocks" element={<Stocks />} />
				<Route path="/Nfts" element={<Nfts />} />
				<Route path="/nft/:id" element={<NftDetails />} />
				<Route path="/exchangeList" element={<ExchangeList />} />
				<Route
					path="/DerivativeExchangeList"
					element={<DerivativeExchangeList />}
				/>
				<Route path="/DerivativeList" element={<DerivativeList />} />

				<Route path="/DataAboutCrypto" element={<DataAboutBTC />} />
				<Route path="/signup" element={<SignUpForm />} />
				<Route path="/OnboardingForm" element={<OnboardingForm />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
