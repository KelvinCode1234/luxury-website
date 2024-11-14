import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


const Navbar = ({ onHomeClick, onExploreClick, onContactClick, onAboutClick }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <i className="fa-solid fa-car fa-beat"></i> Dannybest -<span>Autos</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" onClick={onHomeClick}>
              <a className="nav-link"  style={{ marginLeft: "25px" }} >Home</a>
            </li>
            <li className="nav-item" onClick={onExploreClick}>
              <a className="nav-link" style={{ marginLeft: "25px" }} >Explore</a>
            </li>
            <li className="nav-item" onClick={onAboutClick}>
              <a className="nav-link" style={{ marginLeft: "25px" }} >About</a>
            </li>
            <li className="nav-item" onClick={onContactClick}>
              <a className="nav-link nav-contact" style={{ marginLeft: "25px" }} >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

