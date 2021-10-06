/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.css";
function NavSm({click}) {
  return (
    <div className="nav-sm">
      <ul>
        <li>
          <button onClick={click}>X</button>
        </li>
        <li
          onClick={() => {
            click();
            window.scrollTo(0, 0);
          }}
          className="nav-link"
        >
          <a href="#home">Home</a>
        </li>
        <li onClick={click} className="nav-link">
          <a href="#about">About</a>
        </li>
        <li onClick={click} className="nav-link">
          <a href="#project">Projects</a>
        </li>
        <li onClick={click} className="nav-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavSm;
