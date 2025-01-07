import OperatingHours from "../Component/MarketDataOperatingHours/MarketDataOperatingHours";
import Market from "../Component/MarketsClosingOpening/MarketsClosingOpening";
import StockNews from "../Component/StockNews/StockNews";
import StocksCharts from "../Component/StocksCharts/StocksCharts";

export default function Stocks() {
	return (
		<>
			<OperatingHours />
			<Market />
			<StockNews />
		</>
	);
}
