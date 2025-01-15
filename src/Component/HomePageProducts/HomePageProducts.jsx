import "./HomePageProducts.scss";
import { Link } from "react-router-dom";
import photo3 from "../../assets/images/icons/pexels-leeloothefirst-8919505.jpg";
export default function HomePageProductSection() {
	return (
		<>
			<section className="products">
				<div className="products__wrapper">
					<button className="homepage__button">Our Products</button>
				</div>
				<div className="products__list">
					<div className="products__list-wrapper">
						<Link to="/Crypto">
							<button className="products__item">Cryptocurrency</button>
						</Link>
						<Link to="/Stocks">
							<button className="products__item">Stock Trading</button>
						</Link>
						<Link to="/Nfts">
							<button className="products__item">NFT Market</button>
						</Link>
					</div>
				</div>
				<h4>A road to financial freedom</h4>
				<img
					className="products__image"
					src={photo3}
					alt="Photo for the body"
				/>
			</section>
		</>
	);
}
