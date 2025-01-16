import CoinList from "../Component/CryptocurrencyList/CryptocurrencyList";
import CryptoNews from "../Component/CryptoNews/CryptoNews";
import DefiMarketCap from "../Component/DefiMarketCap/DefiMarketCap";
// import CryptoCurrencyListPolygon from "../Component/CryptoCurrencyListPolygon/CryptoCurrencyListPolygon";
// import DataAboutBTC from "../Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
// import OperatingHours from "../Component/MarketDataOperatingHours/MarketDataOperatingHours";
// import StocksCharts from "../Component/StocksCharts/StocksCharts";

export default function () {
	return (
		<>
			<CoinList />
			<CryptoNews />
			<DefiMarketCap />
			{/* <CryptoCurrencyListPolygon /> */}
			{/* <StocksCharts /> */}
			{/* <DataAboutBTC /> */}
		</>
	);
}
