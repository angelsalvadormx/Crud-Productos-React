import React,{useEffect} from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductoCom = ({ producto,consultarApi}) => {
  
  const eliminarProducto = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurante/${id}`;
          const resultado = await axios.delete(url);
          consultarApi();
          
          Swal.fire(
            {
              type: 'success',
              title: 'Producto eliminado con éxito',
              showConfirmButton: false,
              timer: 1500
            }
          )
        } catch (err) {
          Swal.fire(
            {
              type: 'error',
              title: 'No fue posible eliminar el producto',
              showConfirmButton: false,
              timer: 1500
            }
          )
        }
      }
    })
  }
      return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <p>  {producto.nombre}
          <span className="font-weight-bold"> ${producto.precio}</span>
        </p>
        <div>
          <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
          <button type="button" className="btn btn-danger" onClick={() => eliminarProducto(producto.id)} >
            Eliminar
        </button>
        </div>
      </li>
    );
  };
  export default ProductoCom;