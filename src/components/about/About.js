import ScrollAnimation from "react-animate-on-scroll";
import aboutImg from "../../assets/images/about.jpg";
import "./about.css";

function About() {
	return (
		<section id="about" className="about section">
			<ScrollAnimation animateOnce={true} animateIn="fadeInUp">
				<div className="aboutImg">
					<img src={aboutImg} alt="about me" />
				</div>
			</ScrollAnimation>
			<ScrollAnimation
				animateOnce={true}
				animateIn="fadeInUp"
				delay={100}
				className="left-wrap"
			>
				<h2>
					<span className="underline">About Me</span>
				</h2>
				<p>
					My name is <strong>Emmanuel Ajayi</strong> popularly known as{" "}
					<strong>Tomiwa</strong>. I'm a front-end web developer with a knack for
					beautiful and interactive webites.{" "}
					{/* <em>( PS: I write technical articles occasionally ).</em> */}
				</p>
				<p>
					I love solving little problems or exploring with code, in my free time I
					watch movies ( sci-fi and adventures ), listen to songs or read articles on
					interesting topics.
				</p>
				{/* <p>
          I'm also a first class student of Microbiology at the University of
          Lagos.
        </p> */}
				<h3>Skills:</h3>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>SCSS</li>
					<li>TAILWIND CSS</li>
					<li>MATERIAL UI</li>
					<li>JAVASCRIPT</li>
					<li>TYPESCRIPT</li>
					<li>REACT JS</li>
					<li>NEXT JS</li>
					<li>REDUX</li>
					<li>REDUX TOOLKIT</li>
					<li>GRAPH QL</li>
				</ul>
				<a
					href={window.location.origin + "/resume.pdf"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="btn"> View Resume</button>
				</a>
			</ScrollAnimation>
		</section>
	);
}

export default About;
