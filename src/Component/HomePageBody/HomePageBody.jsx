import photo1 from "../../assets/images/icons/pexels-alesiakozik-6772077.jpg";
import photo2 from "../../assets/images/icons/pexels-leeloothefirst-8919544.jpg";
import photo3 from "../../assets/images/icons/pexels-cottonbro-8721342.jpg";
import { Link } from "react-router-dom";
import "./HomePageBody.scss";
import HomePageProductSection from "../HomePageProducts/HomePageProducts";

export default function HomePageBody() {
	return (
		<>
			<section className="homepage">
				<div className="homepage__wrapper">
					<h3 className="homepage__text">Simple and Secure Design</h3>
					<p>Trading is one click away!</p>
					<Link to="/signup">
						<button className="homepage__button">Create An Account</button>
					</Link>
					<img
						className="homepage__image"
						src={photo1}
						alt="Photo for the body"
					/>
				</div>
			</section>
			<HomePageProductSection />
			<section className="homepage">
				<div className="homepage__wrapper">
					<h3 className="homepage__text">Make First Deposit of $35CAD</h3>
					<p>Get rewarded with $25CAD 🙃 💕</p>
					<button className="homepage__button">Make a Deposit</button>
					<img src={photo2} alt="Photo of the body" />
				</div>
			</section>
			<section className="homepage">
				<div className="homepage__wrapper">
					<h3 className="homepage__text">Women led Blockchain-Hub</h3>
					<p>
						89% of the firm is led by women. Be a part of the decentralized
						future.
					</p>
					<img src={photo3} alt="Photo of the body" />
				</div>
			</section>
		</>
	);
}
