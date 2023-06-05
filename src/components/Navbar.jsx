import React from 'react';
import '../../CSS/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>REGISTRO DE DATOS</h1>

      <Link to={'/'}>
        <button type="submit">Cerrar sesión</button>
            </Link>
    </nav>
  );
}

export default Navbar;