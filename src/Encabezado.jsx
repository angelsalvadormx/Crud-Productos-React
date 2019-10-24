import React from 'react';
import { Link } from 'react-router-dom';
const Encabezado = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="containter">
        <Link to="/productos" className="navbar-brand">
          React CRUD
       </Link>
        <ul className="navbar-nav mr-auto">
         <li className="nav-item">
              <Link to="/productos" className="nav-link" activeClassName="active">Productos</Link>
         </li>
         <li className="nav-item">
              <Link to="/productos-nuevo" className="nav-link" activeClassName="">Nuevo Producto</Link>
         </li>
        </ul> 
      </div>
    </nav>
	);
};

export default Encabezado;

