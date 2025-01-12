import "./Header.scss";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<section>
			<div className="nav">
				<div className="nav__left">
					<h3 className="nav__title">GDChain</h3>
				</div>
				<div className="nav__right">
					<Link to="/signup">
						<p className="nav__signUp">Sign Up</p>
					</Link>
					<p className="nav__login">LogIn</p>
				</div>
			</div>
		</section>
	);
}
