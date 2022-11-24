import React from 'react';
import "./estilo.css"
const Blogs = () => {
  return (
    <React.Fragment>
      <div>
        <h1>
          Lista de órdenes
        </h1>
        <button href="#!"class="link-danger">Crear orden</button>
      </div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#Servicio</th>
          <th scope="col">Fecha</th>
          <th scope="col">Ciudad de entrega</th>
          <th scope="col">Dirección de entrega</th>
          <th scope="col">Estado de entrega</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active">
          <th scope="row">1</th>
          <td>01/01/22</td>
          <td>Valledupar</td>
          <td>Carrera 21 #33-42 San Martín</td>
          <td>Guardado</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>01/01/22</td>
          <td>Valledupar</td>
          <td>Carrera 12 #44-32 Obrebro</td>
          <td>Cancelado</td>
        </tr>
        <tr>
        <th scope="row">3</th>
          <td>01/01/22</td>
          <td>Valledupar</td>
          <td>Carrera 9 #24-12 Obrero</td>
          <td>Entregado</td>
        </tr>
      </tbody>
    </table>
    </React.Fragment>
    
  )
};

export default Blogs;