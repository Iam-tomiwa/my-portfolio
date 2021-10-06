/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";

function Navbar({click, showNav}) {
  // const navStyle = {
  //   clipPath: "circle(100%)",
  // };
  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;
