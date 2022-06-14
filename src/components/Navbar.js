import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <h1 className="nav__logo-text">ReactFacts</h1>
        <h2 className="nav__project-title">React Course - Project 1</h2>
      </nav>
    </header>
  );
}

export default Navbar;
