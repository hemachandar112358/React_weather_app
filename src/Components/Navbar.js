import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="/weather_icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Weather App
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/">Home</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/about">About</Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
