import "./PrimaryNav.scss";
import Socials from "./Socials";

function openMenu(e) {
	if (!e.target.classList.contains("menuButton--active")) {
		e.target.classList.add("menuButton--active");
		document.querySelectorAll(".primaryNav__pages li").forEach(function(list){
			list.style.display = "block";
		});
		return;
	}
	e.target.classList.remove("menuButton--active");
	document.querySelectorAll(".primaryNav__pages li").forEach(function(list){
		list.style.display = "none";
	});
}

export default function PrimaryNav() {
	return (
		<nav className="primaryNav">
			<ul className="primaryNav__pages">
				<div className="primaryNav__logo">
					<a href="/">
						<img src="./images/logo.svg" alt="logo" />
					</a>
					<div className="menuButton" onClick={(e) => openMenu(e)}>
						<div className="menuButton__topLine"></div>
						<div className="menuButton__bottomLine"></div>
					</div>
				</div>
				<li>
					<a href="/howitworks">How it works</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/support">Support</a>
				</li>
			</ul>
			<Socials />
		</nav>
	);
}
