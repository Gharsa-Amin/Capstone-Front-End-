import ComplaintForm from "../Component/ComplaintForm/ComplaintForm";
import Hero from "../Component/Hero/Hero";
import HomePageBody from "../Component/HomePageBody/HomePageBody";
import OperatingHours from "../Component/MarketDataOperatingHours/MarketDataOperatingHours";

export default function HomePage() {
	return (
		<>
			<Hero />
			<HomePageBody />
			<ComplaintForm />
			<OperatingHours />
		</>
	);
}
