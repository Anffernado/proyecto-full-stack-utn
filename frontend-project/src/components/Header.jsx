import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import headerGuitar from '../assets/images/header_guitarra.png';

function Header() {
  return (
    <header className="header">
      <div className="header__contenedor">
        <div className="header__barra">
          <Link to="/">
            <img className="header__logo" src={logo} alt="imagen logo" />
          </Link>

          <nav className="navegacion">
            <Link className="navegacion__enlace" to="/">Home</Link>
            <Link className="navegacion__enlace" to="/aboutus">About Us</Link>
            <Link className="navegacion__enlace" to="/blog">Blog</Link>
            <Link className="navegacion__enlace" to="/shop">Shop</Link>
            <Link className="navegacion__enlace" to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="modelo">
          <h1 className="modelo__nombre">CRUST ZX-500</h1>
          <p className="modelo__descripcion">Descubre la magia sonora de la CRUST ZX-500. Diseño inigualable y tono eléctrico que captura cada emoción. ¡Eleva tu música a otro nivel con la guitarra que todos desean!</p>
          <p className="modelo__precio">$5000</p>
          <a className="modelo__enlace" href="producto.html">Ver Producto</a>
        </div>
        <img className="header__guitarra" src={headerGuitar} alt="imagen header guitarra"></img>
      </div>
    </header>
  );
}

export default Header;