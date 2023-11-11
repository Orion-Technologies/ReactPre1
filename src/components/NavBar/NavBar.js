import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item title is-1">Ecommerce</a>
          </div>
        </div>
      </div>

      <div className="buttons is-centered">
        <button className="button is-info">Categoria 1</button>
        <button className="button is-info">Categoria 2</button>
        <button className="button is-info">Categoria 3</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
