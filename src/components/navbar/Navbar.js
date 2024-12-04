/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./nav.css";

function Navbar({ click, showNav }) {
	// const navStyle = {
	//   clipPath: "circle(100%)",
	// };
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`nav ${scrolled ? "scrolled" : ""}`}>
			<div className="inner">
				<p className="logo">Tomiwa</p>
				<i className="fa fa-bars" onClick={click}></i>
				<ul className="navList">
					<li className="navLink">
						<a href="#">Home</a>
					</li>
					<li className="navLink">
						<a href="#about">About</a>
					</li>
					<li className="navLink">
						<a href="#project">Projects</a>
					</li>
					<li className="navLink">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
