import React, { useState ,useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const EditarProducto = ({ producto, history, fun }) => {
  console.log(producto);

  const [nombre, editarNombre] = useState(producto.nombre);
  const [precio, editarPrecio] = useState(producto.precio);
  const [categoria, editarCategoria] = useState(producto.categoria);
  const leerRadio = e => { editarCategoria(e.target.value); }
  const [error, saveError] = useState(false);

  const EditarP = async (e) => {
    console.log('click');

    e.preventDefault();
    console.log("nombre ",nombre);
    console.log("precio",precio);
    console.log("categoria",categoria);
    
    if (nombre === '' || precio === '' || categoria === '') { saveError(true); return; }
    saveError(false);

    try {
      const resultado = await axios.put(`http://localhost:4000/restaurante/${producto.id}`, {
        nombre: nombre,
        precio:precio,
        categoria:categoria
      });
      fun();
      Swal.fire(
        'Agregado!',
        'success'
      )
    }
    catch (error) {
      console.log("error",error);
      Swal.fire(
        'Error!',
        'error'
      )
    }
    //redireccionar a /productos
    history.push('/productos');
  }

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar Producto</h1>

      <form className="mt-5" onSubmit={EditarP}>
        <div className="form-group">
          <label>Nombre Platillo</label>
          <input type="text" className="form-control" name="nombre" placeholder="Nombre Platillo" defaultValue={producto.nombre} onChange={e => editarNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Precio Platillo</label>
          <input type="number" className="form-control" name="precio" placeholder="Precio Platillo" defaultValue={producto.precio} onChange={e => editarPrecio(e.target.value)} />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="categoria" value="postre" defaultChecked={(producto.categoria === 'postre')} onChange={leerRadio} />
            <label className="form-check-label">
              Postre
                        </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="categoria" value="bebida" defaultChecked={(producto.categoria === 'bebida')} onChange={leerRadio} />
            <label className="form-check-label">
              Bebida
                        </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="categoria" value="cortes" defaultChecked={(producto.categoria === 'cortes')} onChange={leerRadio} />
            <label className="form-check-label">
              Cortes
                        </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="categoria" value="ensalada" defaultChecked={(producto.categoria === 'ensalada')} onChange={leerRadio} />
            <label className="form-check-label">
              Ensalada
                        </label>
          </div>
        </div>
        <input type="submit" className=" mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
      </form>
    </div>
  );
}

export default withRouter(EditarProducto);
