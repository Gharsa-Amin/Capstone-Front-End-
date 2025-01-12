import ComplaintForm from "../Component/ComplaintForm/ComplaintForm";
import Hero from "../Component/Hero/Hero";
import HomePageProductSection from "../Component/HomePageProducts/HomePageProducts";

export default function HomePage() {
	return (
		<>
			<Hero />
			<HomePageProductSection />
			<ComplaintForm />
		</>
	);
}
