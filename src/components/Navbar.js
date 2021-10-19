import React, {Component} from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Sistema Prospectos</span>
            </div>
        );
    }
}
 
export default Navbar;