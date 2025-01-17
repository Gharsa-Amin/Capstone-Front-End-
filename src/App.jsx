import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Stocks from "./Pages/StocksPage/StocksPage";
import Nfts from "./Pages/NftsPage/NftsPage";
import NftDetails from "./Component/NftDetails/NftDetails";
import TopGainersAndLosers from "./Component/TopGainersAndLosers/TopGainersAndLosers";
import DataAboutBTC from "./Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import OnboardingForm from "./Component/OnboardingForm/OnboardingForm";
import CryptocurrencyDetails from "./Component/CryptocurrencyCharts/CryptocurrencyCharts";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { useNavigate } from "react-router-dom";
import Trading from "./Component/Trading/Trading";
import CryptocurrencyPage from "./Pages/CryptocurrencyPage/CryptocurrencyPage";
import MainHomePage from "./Pages/MainHomePage/MainHomePage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<MainHomePage />} />
				<Route path="/Crypto" element={<CryptocurrencyPage />} />
				<Route path="/coins/:coinId" element={<CryptocurrencyDetails />} />
				<Route path="/Stocks" element={<Stocks />} />
				<Route path="/Nfts" element={<Nfts />} />
				<Route path="/nft/:id" element={<NftDetails />} />

				<Route path="/DataAboutCrypto" element={<DataAboutBTC />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/onboardingform" element={<OnboardingForm />} />
				<Route path="/trading" element={<Trading />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
