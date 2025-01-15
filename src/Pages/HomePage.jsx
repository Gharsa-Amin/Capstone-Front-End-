import ComplaintForm from "../Component/ComplaintForm/ComplaintForm";
import Hero from "../Component/Hero/Hero";
import HomePageBody from "../Component/HomePageBody/HomePageBody";

export default function HomePage() {
	return (
		<>
			<Hero />
			<HomePageBody />
			<ComplaintForm />
		</>
	);
}
