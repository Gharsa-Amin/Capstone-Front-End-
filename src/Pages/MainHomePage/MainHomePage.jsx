import ComplaintForm from "../../Component/ComplaintForm/ComplaintForm";
import Hero from "../../Component/Hero/Hero";
import HomePageBody from "../../Component/HomePageBody/HomePageBody";
import OperatingHours from "../../Component/MarketDataOperatingHours/MarketDataOperatingHours";

export default function MainHomePage() {
	return (
		<>
			<Hero />
			<HomePageBody />
			<ComplaintForm />
			<OperatingHours />
		</>
	);
}
