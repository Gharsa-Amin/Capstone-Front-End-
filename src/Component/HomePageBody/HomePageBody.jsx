import photo1 from "../../assets/images/icons/pexels-alesiakozik-6772077.jpg";
import photo2 from "../../assets/images/icons/pexels-leeloothefirst-8919544.jpg";
import { Link } from "react-router-dom";
import "./HomePageBody.scss";
export default function HomePageBody() {
	return (
		<>
			<section className="homepage">
				<div className="homepage__wrapper">
					<h3 className="homepage__text">
						<span>Simple and Secure Design</span> Trading is one click away!
					</h3>
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
			<section className="homepage">
				<div className="homepage__wrapper">
					<h3 className="homepage__text">
						<span>First deposit of $35CAD, </span>
						get rewarded with $25CAD
					</h3>
					<img src={photo2} alt="Photo of the body" />
				</div>
			</section>
		</>
	);
}
