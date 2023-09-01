import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contenedor footer__contenido">
        <nav className="footer__nav">
          <Link className="footer__enlace" to="/">Home</Link>
          <Link className="footer__enlace" to="/aboutus">About us</Link>
          <Link className="footer__enlace" to="/blog">Blog</Link>
          <Link className="footer__enlace" to="/shop">shop</Link>
          <Link className="footer__enlace" to="/contact">Contact</Link>
        </nav>
        <p className="footer__copyright">All rights reserved ®</p>
      </div>
    </footer>
  );
}

export default Footer;