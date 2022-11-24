import React from 'react';
import "./estilo.css"

const CrearOrden = () => {
    return (
        <React.Fragment>
            <h1>Crear orden</h1>
            <div class="container-fluid h-custom help" >
                <form class= "form">
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3">Fecha</label>
                        <input type="date" id="form3Example3" class="fecha" />
                        <label class="form-label" for="form3Example3">Hora</label>
                        <input type="time" id="form3Example3" class="fecha" />
                    </div>
                    <div>
                        <input type="checkbox" id="cbox1" value="first_checkbox" />
                        <label>
                            
                            Guardado
                        </label>
                        <input type="checkbox" id="cbox2" value="second_checkbox" />
                        <label for="cbox2">
                            Entregado
                        </label>
                        <input type="checkbox" id="cbox3" value="tercer_checkbox" />
                        <label for="cbox2">
                            Cancelado
                        </label>
                    </div>
                    <div>
                        <label>
                            Largo
                        </label>
                        <input class="dimensiones"></input>
                        <label>
                            Alto
                        </label>
                        <input class="dimensiones"></input>
                        <label>
                            Peso
                        </label>
                        <input class="dimensiones"></input>
                    </div>
                    <label class="label1">
                        Dirección de recogida
                    </label>
                    <input class="text"></input><br />
                    <label class="label1">
                        Ciudad de recogida
                    </label>
                    <input class="text"></input><br />
                    <label class="label1">
                        Nombre del destinatario
                    </label>
                    <input class="text"></input><br />
                    <label class="label1">
                        Cédula de ciudadanía/NIT
                    </label>
                    <input class="text"></input><br />
                    <label class="label1">
                        Dirección de entrega
                    </label>
                    <input class="text"></input><br />
                    <label class="label1">
                        Ciudad de entrega
                    </label>
                    <input class="text"></input><br />
                    <button type="button" class="btn btn-primary btn-lg">Ingresar</button>                
                </form>
                            
            </div> 
           
        </React.Fragment>

    );
};

export default CrearOrden;