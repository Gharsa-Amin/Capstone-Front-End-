import CoinList from "../Component/CryptocurrencyList/CryptocurrencyList";
import CryptoCurrencyListPolygon from "../Component/CryptoCurrencyListPolygon/CryptoCurrencyListPolygon";
import DataAboutBTC from "../Component/DataAboutEachCryptoCurrency/DataAboutEachCryptoCurrency";
import OperatingHours from "../Component/MarketDataOperatingHours/MarketDataOperatingHours";
import StocksCharts from "../Component/StocksCharts/StocksCharts";

export default function () {
	return (
		<>
			<CoinList />
			<CryptoCurrencyListPolygon />
			<StocksCharts />
			{/* <DataAboutBTC /> */}
		</>
	);
}
