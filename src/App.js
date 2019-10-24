import React,{useEffect, useState} from 'react';
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
  useEffect(() => {
    const consultarApi = async () => {
      const resultado = await axios.get('http://localhost:4000/restaurante');
      console.log(resultado.data);
      guardarProductos(resultado.data); 
    }
    consultarApi();
  }, []);

  return (
    <Router>
      <Encabezado />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos
              productos={productos} />
          )} />
          <Route exact path="/productos-nuevo" component={AgregarProducto} />
          <Route exact path="/productos/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto} />
        </Switch>
      </div>
      <Pie />
    </Router>

  );
}

export default App;
