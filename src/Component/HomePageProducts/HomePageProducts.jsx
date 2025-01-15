import "./HomePageProducts.scss";
import { Link } from "react-router-dom";
export default function HomePageProductSection() {
	return (
		<section className="products">
			<div className="products__wrapper">
				<button>Our Products</button>
			</div>
			<h4>One Step away from making Generational Wealth</h4>
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
		</section>
	);
}
