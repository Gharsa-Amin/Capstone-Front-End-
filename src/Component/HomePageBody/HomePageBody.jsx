import photo1 from "../../assets/images/icons/pexels-alesiakozik-6772077.jpg";
import "./HomePageBody.scss";
export default function HomePageBody() {
	return (
		<section className="homepage">
			<div className="wrapper">
				<h3>
					Simple and Secure Design: Start Trading today and start earning
					rewards. Trading is one click away!
				</h3>
				<img
					className="homepage__image"
					src={photo1}
					alt="Photo for the body"
				/>
			</div>
		</section>
	);
}
