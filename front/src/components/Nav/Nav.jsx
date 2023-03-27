import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css"

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
                <div className={style.nav}>
                        <SearchBar onSearch={this.props.onSearch} className=''/>
                    
                        
                            <Link to="/home">
                                HOME
                            </Link>
                        
                        
                            <Link to="/about" className=''>
                                ABOUT
                            </Link>
                        
                            <Link to="/favorites" className=''>
                                FAVORITES
                            </Link>
                        
                        <Link to="/" >Logout</Link>

                </div>
            
        )
    }
}

export default Nav; 

//se usa this.prop.onSearch porque es un componente de clase