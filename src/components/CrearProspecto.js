import React, {Component} from 'react'

class CrearProspecto extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h1 className="row justify-content-center" >Captura de prospecto</h1>
                <div className="card">
                    <div className="card-header">
                        Prospecto
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CrearProspecto;