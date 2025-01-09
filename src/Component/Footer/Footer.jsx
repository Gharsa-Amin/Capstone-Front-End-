import Instagram from "../../assets/images/icons/Icon-instagram.svg";
import Twitter from "../../assets/images/icons/Icon-twitter.svg";
import Facebook from "../../assets/images/icons/Icon-facebook.svg";

import "./Footer.scss";
export default function Footer() {
	return (
		<section>
			<div className="footer">
				<div className="footer__buttons">
					<button className="footer__buttons-download">
						Download on the App Store
					</button>
					<button className="footer__buttons-download">
						Get it On Google Play
					</button>
					<button className="footer__buttons-download">
						Download for Android
					</button>
				</div>
				<div className="footer__wrapper">
					<div className="footer__header">Get In Touch</div>
					<div className="footer__images">
						<a href="https://www.instagram.com/" target="_blank">
							{" "}
							<img
								className="footer__image"
								src={Instagram}
								alt="Instagram icon"
							/>
						</a>
						<a href="https://www.twitter.com/" target="_blank">
							{" "}
							<img className="footer__image" src={Twitter} alt="Twitter icon" />
						</a>

						<a href="https://www.Facebook.com/" target="_blank">
							{" "}
							<img
								className="footer__image"
								src={Facebook}
								alt="Facebook icon"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
