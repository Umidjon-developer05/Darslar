import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src="/logo.svg" alt="LogoZone" />
          <h2>Zone</h2>
        </div>
        <div className="navbar_links">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Service</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>
              <button>Contact US</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
