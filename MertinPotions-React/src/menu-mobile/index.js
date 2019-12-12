import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './style.scss'

export default class MenuMobile extends Component{

    render(){

        return (



                    

                <div className="menu-mobile">
                        
                <div className="fechar-pesquisar flex">
                        <div className="icon-fechar" onClick={this.props.fecharMenuMobile()}>
                                X
                        </div>
                        <div className="pesquisar relative">
                            <div className="lupa"> <FontAwesomeIcon size="2x" icon={faSearch}/> </div>
                            <input type="text" placeholder="pesquisar"/>
                            </div>
                        </div>


                        <nav>
                            <ul>
                                <li><a>Potions</a></li>
                                <li><a>Ingredients</a></li>
                                <li><a>Books</a></li>
                                <li><a>Supplies</a></li>
                                <li><a>Charms</a></li>
                                <li><a>Clearence !</a></li>
                            </ul>
                        </nav>
                        <div className="login">
                            </div>
                    
                    </div>
        );
    }

}