import React, { Component } from 'react'

import {Link} from 'react-router-dom'

class ListarProspectos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataReceived: false,
            prospectos: [],
            documentos: []
        }
    }

    getProspectos(){
        fetch("http://localhost:4000/api/prospectos")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({ dataReceived: true, prospectos: data})
        })
        .catch(console.log);
    }

    componentDidMount(){
        this.getProspectos();
    }

    render() {

        const { dataReceived, prospectos } = this.state;
        if(!dataReceived){
            return(<div>Cargando...</div>);
        } else {
            return (
                <div className="container">
                <h1 className="row justify-content-center" >Listado de prospectos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Estatus</th>
                            {/* <th>Documento</th> */}
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prospectos.map(
                            (prospecto) => (
                                <tr key={prospecto.id}>
                                    <td>{prospecto.nombre}</td>
                                    <td>{prospecto.apellido}</td>
                                    <td>{prospecto.estatus}</td>
                                    {/* <a href="~/archives/@item.PdfName" class="btn btn-primary" target="_blank">Plan de estudio</a> */}
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-primary" to={"/detalles"}>Ver detalles</Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )
                        }
                    </tbody>
                </table>
            </div>
            );
        }
    }
}

export default ListarProspectos;