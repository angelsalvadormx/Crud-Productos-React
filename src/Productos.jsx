import React from 'react'; 
import Producto from './Producto';

const Productos = ({ productos,fun}) => {
  return (
    <React.Fragment>
      <h1 className="text center"> Productos </h1>
      <ul className="list-group mt-5">
        {productos.map(unproducto => (
          <Producto key={unproducto.id} producto={unproducto} consultarApi={fun} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Productos;