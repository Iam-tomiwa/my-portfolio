import aboutImg from "../../images/about.png";
import "./about.css";

function About() {
  return (
    <section id="about" className="about section">
      <div>
        <div className="aboutImg">
          <img src={aboutImg} alt="about me" />
        </div>
      </div>
      <div className="left-wrap">
        <h2>
          <span className="underline">About Me</span>
        </h2>
        <p>
          My name is <strong>Emmanuel Ajayi</strong> popularly known as{" "}
          <strong>Tomiwa</strong>. I'm a front-end web developer with a knack
          for beautiful and interactive webites.{" "}
          {/* <em>( PS: I write technical articles occasionally ).</em> */}
        </p>
        <p>
          I love solving little problems or exploring with code, in my free time
          I watch movies ( sci-fi and adventures ), listen to songs or read
          articles on interesting topics.
        </p>
        <p>
          I'm also a first class student of Microbiology at the University of
          Lagos.
        </p>
        <a
          href="https://drive.google.com/file/d/1mMCNRDJszQLzYm1NsiGQtQAVgxN2AqNx/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn"> Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
