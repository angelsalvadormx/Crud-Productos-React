import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Productos from './Productos';
import Producto from './Producto';
import Encabezado from './Encabezado';
import Pie from './PieDePagina';
import EditarProducto from './EditarProducto';
import AgregarProducto from './AgregarProducto';

function App() {
  const [productos, guardarProductos] = useState([]);
  const consultarApi = async () => {
    const resultado = await axios.get('http://localhost:4000/restaurante');
    console.log("res ", resultado.data);
    guardarProductos(resultado.data);
  }
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Router>
      <Encabezado />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={productos} fun={consultarApi} />
          )} />
          <Route exact path="/productos-nuevo" render={() => (
            <AgregarProducto fun={consultarApi}/>
          )} />
          <Route exact path="/productos/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto} />
        </Switch>
      </div>
      <Pie />
    </Router>

  );
}

export default App;
