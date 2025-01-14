import ComplaintForm from "../Component/ComplaintForm/ComplaintForm";
import Hero from "../Component/Hero/Hero";
import HomePageBody from "../Component/HomePageBody/HomePageBody";
import HomePageProductSection from "../Component/HomePageProducts/HomePageProducts";

export default function HomePage() {
	return (
		<>
			<Hero />
			<HomePageBody />
			<HomePageProductSection />
			<ComplaintForm />
		</>
	);
}
