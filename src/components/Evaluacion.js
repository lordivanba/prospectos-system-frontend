import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class Evaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReceived: false,
            prospectos: []
        }
    }

    getProspectos(){
        fetch("http://localhost:4000/api/prospectos")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({dataReceived: true, prospectos: data})
        })
        .catch(console.log);
    }

    componentDidMount(){
        this.getProspectos();
    }
    
    render() {
        const { dataReceived, prospectos} = this.state;
        if(!dataReceived){
            return(<div>Cargando...</div>);
        } else{
            
        }
        return (
            <div>
                <h1 className="row justify-content-center" >Evaluación de prospectos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Calle</th>
                            <th>Colonia</th>
                            <th>Codigo Postal</th>
                            <th>Teléfono</th>
                            <th>RFC</th>
                            <th>Estatus</th>
                            <th>Observación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prospectos.map(
                            (prospecto) => (
                                <tr key={prospecto.id}>
                                    <td>{prospecto.id}</td>
                                    <td>{prospecto.nombre}</td>
                                    <td>{prospecto.apellido}</td>
                                    <td>{prospecto.calle}</td>
                                    <td>{prospecto.colonia}</td>
                                    <td>{prospecto.codigoPostal}</td>
                                    <td>{prospecto.telefono}</td>
                                    <td>{prospecto.rfc}</td>
                                    <td>{prospecto.estatus}</td>
                                    <td>{prospecto.observacion}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <button type="button" className="btn btn-success" >Autorizar</button>
                                            <button type="button" className="btn btn-danger">Rechazar</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )

                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Evaluacion;
