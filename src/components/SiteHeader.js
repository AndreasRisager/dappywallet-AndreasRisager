import PrimaryNav from "./PrimaryNav";
import "./SiteHeader.scss";

export default function SiteHeader() {
	return (
		<>
			<header className="siteHeader">
				<PrimaryNav />
				<div className="siteHeader__content">
					<div className="content__text">
						<h1>Create your first decentralized wallet</h1>
						<p>The easiest way to manage multiple cryptocurrency assets</p>
						<a href="/">Create wallet</a>
					</div>
					<img src="./images/wallet.png" alt="" />
				</div>
			</header>
		</>
	);
}
