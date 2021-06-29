import "./header.css";
import profilePic from "../../images/emoji.png";

function Header() {
  return (
    <header id="home">
      <div className="wrap">
        <img className="memoji" src={profilePic} alt="profile pic" />
        <h2>Hi, I'm Tomiwa</h2>
        <h1>
          <span className="underline">Building</span> Interactive User
          Interfaces And Experience
        </h1>
        <p>
          a <strong>front-end web developer</strong>, a multitalented
          personality, an astude learner with great attention to detail.
        </p>
        <a href="#contact">
          <button className="btn">Connect With Me</button>
        </a>
        <div className="icons-wrap">
          <a href="https://wa.me/+2348154050552">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.twitter.com/I_am_Ajayii/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/Iam-tomiwa">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://dev.to/iamtomiwa">
            <i className="fab fa-dev"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
