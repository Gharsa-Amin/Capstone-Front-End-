import photo1 from "../../assets/images/icons/pexels-alesiakozik-6772077.jpg";
import "./HomePageBody.scss";
export default function HomePageBody() {
	return (
		<section className="homepage">
			<div className="homepage__wrapper">
				<h3 className="homepage__text">
					<span>Simple and Secure Design</span> Trading is one click away!
				</h3>
				<button className="homepage__button">Create An Account</button>
				<img
					className="homepage__image"
					src={photo1}
					alt="Photo for the body"
				/>
			</div>
		</section>
	);
}
