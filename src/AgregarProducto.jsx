import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const AgregarProducto = ({ history, fun }) => {
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');
    const [categoria, guardarCategoria] = useState('');
    const leerRadio = e => { guardarCategoria(e.target.value); }
    const [error, saveError] = useState(false);

    const agregarNuevo = async (e) => {
        e.preventDefault();
        if (nombre === '' || precio === '' || categoria === '') { saveError(true); return; }
        saveError(false);
        try {
            const resultado = await axios.post('http://localhost:4000/restaurante', {
                nombre,
                precio,
                categoria
            });
            fun();
            Swal.fire(
                'Agregado!',
                'success'
            )
        }
        catch (error) {
            console.log(error);
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
            <h1 className="text-center">Agregar Nuevo Producto</h1>

            <form className="mt-5" onSubmit={agregarNuevo}>
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre Platillo" onChange={e => guardarNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input type="number" className="form-control" name="precio" placeholder="Precio Platillo" onChange={e => guardarPrecio(e.target.value)} />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="postre" onChange={leerRadio} />
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="bebida" onChange={leerRadio} />
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="cortes" onChange={leerRadio} />
                        <label className="form-check-label">
                            Cortes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="categoria" value="ensalada" onChange={leerRadio} />
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>
                </div>
                <input type="submit" className=" mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    );
}

export default withRouter(AgregarProducto);
