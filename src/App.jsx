import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Stocks from "./Pages/Stocks";
import Nfts from "./Pages/Nfts/Nfts";
import NftDetails from "./Component/NftDetails/NftDetails";
import ExchangeList from "./Component/ExchangesList/ExchangesList";
import DerivativeExchangeList from "./Component/DerivativesExchanges/DerivativesExchanges";
import DerivativeList from "./Component/DerivativeList/DerivativeList";
import TopGainersAndLosers from "./Component/TopGainersAndLosers/TopGainersAndLosers";
import DataAboutBTC from "./Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
import Header from "./Component/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Component/Footer/Footer";
import SignUpForm from "./Component/SignUpForm/SignUpForm";
import OnboardingForm from "./Component/OnboardingForm/OnboardingForm";
import CryptocurrencyDetails from "./Component/CryptocurrencyDetails/CryptocurrencyDetails";
import LoginPage from "./Component/Login/Login";
import ProfilePage from "./Component/Profile/Profile";
import { useNavigate } from "react-router-dom";
import Trading from "./Component/Trading/Trading";
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
				<Route path="/login" element={<LoginPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/onboardingform" element={<OnboardingForm />} />
				<Route path="/trading" element={<Trading />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
