import OperatingHours from "../Component/MarketDataOperatingHours/MarketDataOperatingHours";
import Market from "../Component/MarketsClosingOpening/MarketsClosingOpening";
import StockNews from "../Component/StockNews/StockNews";
import StocksCharts from "../Component/StocksCharts/StocksCharts";
import TopGainersAndLosers from "../Component/TopGainersAndLosers/TopGainersAndLosers";

export default function Stocks() {
	return (
		<>
			{/* <Market /> */}
			{/* <TopGainersAndLosers /> */}
			<StockNews />
		</>
	);
}
