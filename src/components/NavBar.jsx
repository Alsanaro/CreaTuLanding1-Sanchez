import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header className="bg-light shadow-sm mb-4">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <NavLink to="/" className="text-decoration-none h4 m-0 text-dark">
          ECOMMERCE
        </NavLink>

        <nav className="d-flex gap-4 align-items-center">
          <NavLink className="text-dark text-decoration-none" to="/">Inicio</NavLink>
          <NavLink className="text-dark text-decoration-none" to="/categoria/sneakers">Sneakers</NavLink>
          <NavLink className="text-dark text-decoration-none" to="/categoria/jerseys">Jerseys</NavLink>
          <NavLink className="text-dark text-decoration-none" to="/categoria/jackets">Jackets</NavLink>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;