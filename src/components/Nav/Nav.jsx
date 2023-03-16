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
                    
                        <a>
                            <Link to="/home">
                                HOME
                            </Link>
                        </a>
                        <a>
                            <Link to="/about" className=''>
                                ABOUT
                            </Link>
                        </a>
                        <a>
                            <Link to="/favorites" className=''>
                                FAVORITES
                            </Link>
                        </a>
                        <a>
                        <SearchBar onSearch={this.props.onSearch} className=''/>
                        </a>
                        <a>
                        <Link to="/" >Logout</Link>
                        </a>

                </div>
            
        )
    }
}

export default Nav; 

//se usa this.prop.onSearch porque es un componente de clase