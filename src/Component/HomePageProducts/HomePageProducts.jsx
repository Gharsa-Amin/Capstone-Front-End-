import "./HomePageProducts.scss";
import { Link } from "react-router-dom";
import photo3 from "../../assets/images/icons/pexels-leeloothefirst-8919505.jpg";
export default function HomePageProductSection() {
	return (
		<section className="products">
			<div className="products__wrapper">
				<button>Our Products</button>
			</div>
			<h4>A road to financial freedom</h4>
			<div className="products__list">
				<Link to="/Crypto">
					<p className="products__item">Cryptocurrency</p>
				</Link>
				<Link to="/Stocks">
					<p className="products__item">Stock Trading</p>
				</Link>
				<Link to="/Nfts">
					<p className="products__item">NFT Market</p>
				</Link>
			</div>
			<img className="products__image" src={photo3} alt="Photo for the body" />
		</section>
	);
}
