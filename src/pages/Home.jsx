import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
	return (
		<main className="home-page">
			<section className="home-hero">
				<div className="home-hero-content">
					<p className="home-eyebrow">SHOPKART / EVERYDAY ESSENTIALS</p>
					<h1>Find something worth bringing home.</h1>
					<p className="home-intro">
						Thoughtful picks, clear prices, and a checkout experience
						that keeps shopping simple.
					</p>
					<div className="home-actions">
						<Link className="home-primary-action" to="/products">
							Browse products
						</Link>
						<Link className="home-secondary-action" to="/cart">
							View cart
						</Link>
					</div>
				</div>

				<div className="home-feature" aria-label="ShopKart highlights">
					<span className="home-feature-number">01</span>
					<div>
						<strong>Curated for the moment</strong>
						<p>Useful things with a little more character.</p>
					</div>
				</div>
			</section>

			<section className="home-highlights" aria-label="ShopKart benefits">
				<article>
					<span>01</span>
					<h2>Easy to explore</h2>
					<p>Browse a focused collection without the noise.</p>
				</article>
				<article>
					<span>02</span>
					<h2>Ready when you are</h2>
					<p>Add a favorite and find it waiting in your cart.</p>
				</article>
				<article>
					<span>03</span>
					<h2>Built for everyday</h2>
					<p>Simple choices for work, home, and everywhere between.</p>
				</article>
			</section>
		</main>
	);
}

