import Roadmap from "./components/Roadmap";
import SiteHeader from "./components/SiteHeader";
import Socials from "./components/Socials";
import "./style.scss";

// function formValidater(e) {
// 	e.preventDefault();
// 	var x=e.target.form.email.value;
// 	var atposition=x.indexOf("@");
// 	var dotposition=x.lastIndexOf(".");
// 	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
// 		e.target.form.email.focus();
// 		e.target.form.email.style.border = "2px solid red";
// 		e.target.form.email.style.outlineColor = "red";
//   } else {
// 		e.target.form.email.style.border = "1px solid green";
// 		e.target.form.email.style.outlineColor = "green";
// 	}
// } onSubmit={(e) => formValidater(e)}

export default function App() {
	return (
		<>
			<SiteHeader />
			<article className="aboutDappy">
				<div className="aboutDappy__row">
					<section>
						<p>
							Dappy is light wallet powered by Blockstack. It uses Gaia decentralized storage and encryption option.
							Dappy doesn't store or proceed user private key, the all data are securely stored in the Gaia. Dappy was
							created by the BC Net that trust in crypto and decentralized applications.
						</p>
					</section>
					<section>
						<h2>Free and open source</h2>
						<img src="./images/pic2.png" alt="" />
						<p>
							Fully open and transparent wallet. Our code is <span className="bold">open source</span> and trusted by
							Blockstack Team.
						</p>
					</section>
					<section>
						<h2 className="roadmap__heading">Roadmap</h2>
						<div className="roadmap">
							<Roadmap text="Blockstack Autorisation" date="May 2018" green />
							<Roadmap text="Decentralized storage Gaia" green />
							<Roadmap text="BTC, ETH, ETC, LTC, BCH, BTG, DOGE, DCR, DACH" green />
							<Roadmap text="Support ERC20 tokens" green />
							<Roadmap text="Support Custom token" green />
							<Roadmap text="Exchange powered by ShapeShift" date="June 2018" green />
							<Roadmap text="Add more coins: ZEC, DCR, XRP..." date="2018 - 2019" blue />
							<Roadmap text="Blockstack contact list" white />
							<Roadmap text="Support token for each coins" white />
							<Roadmap text="Support private key in different formats" white />
							<Roadmap text="Multilanguage support" white />
							<Roadmap text="Different UI themes" white />
							<Roadmap text="Ledger, Trezor integrations" white />
							<Roadmap text="In-app marketplace or DApp browser" white />
							<Roadmap text="and lots more" white more />
						</div>
					</section>
				</div>
				<div className="aboutDappy__row">
					<section>
						<h2>Multi-currencies</h2>
						<img src="./images/pic1.png" alt="" />
						<p>Receive, send and store the most popular coins, like Bitcoin, Ethereum, Litecoin, Dash and lots more.</p>
					</section>
					<section>
						<h2>Tokens</h2>
						<img src="./images/pic3.png" alt="" />
						<p>Full support for any tokens on Ethereum network. Bitcoin tokens (Omnilayer) is coming soon.</p>
					</section>
					<section>
						<h2>Exchange</h2>
						<p>
							In-app exchange is supported by ShapeShift, it allows to convert coins to each other in the most intuitive
							and easiest way.
						</p>
						<img src="./images/pic4.png" alt="" />
					</section>
				</div>
			</article>
			<footer className="siteFooter">
				<div className="siteFooter__col">
					<h3>About</h3>
					<a href="/" className="siteFooter__link">
						Introducing
					</a>
					<a href="/" className="siteFooter__link">
						Terms of Service
					</a>
					<a href="/" className="siteFooter__link">
						Privacy Policy
					</a>
				</div>
				<div className="siteFooter__col">
					<h3>Contact</h3>
					<a href="mailto:hello@dappywallet.com" className="siteFooter__link">
						hello@dappywallet.com
					</a>
					<Socials />
				</div>
				<div className="siteFooter__col">
					<h3>Newsletter</h3>
					<p className="siteFooter__text">Please enter your e-mail if want to receive updates.</p>
					<form name="Newsletter" method="POST" data-netlify="true">
						<input type="hidden" name="Newsletter" value="Newsletter" />
						<input type="email" name="email" placeholder="Your e-mail" />
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</footer>
		</>
	);
}
