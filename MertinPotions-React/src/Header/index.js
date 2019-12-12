import React, { Component }  from'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faSearch, faBars} from '@fortawesome/free-solid-svg-icons'

import '../Main.scss';
import './style.scss';

 export default class Header extends Component{

    constructor(props){
        super(props);
            this.state={
                carrinhoItens:Object.values(localStorage),
                menuMobile:false,
               
            }
    }

        


       
    render(){

        const menuMobile = ()=>{
            if(this.props.menuMobile){

                   
            }


        }

        return(
            <header  >
                    <div className="flex center desktop"  onLoad={this.getCarrinho} >
                        {/* class desktop usada para apagar o elemento no mobile*/}
                            <div className="container  logo">
                                        <h2>Mertin Potions</h2>
                                    <div className="relative">
                                            <p>Fine Potions since 1026</p>
                                            <div className="linha-absolute"></div>
                                            <div className="linha-absolute"></div>

                                        </div>
                                </div>
                                <div className="container ">
                                <div className="pesquisa relative">    
                                    <div className="lupa">
                                        <FontAwesomeIcon icon={faSearch} size="2x"/>
                                        </div>
                                        <input type="text" placeholder="Search our stock"></input>
                                        </div>    
                                </div>
                                <div className="container ">
                                    <p>Free Shipping</p>
                                    <p>an orders over </p>

                                </div>
                                <div className="container">
                            <p>Total de produtos {this.props.carrinho}</p>
                                        <FontAwesomeIcon icon={faShoppingCart}  size="2x" />
                                </div>
                        </div>



                        {/*header mobile abaixo */}
                        <div className="flex center mobile">
                                <div className="container">
                                        <div onClick={this.props.menuMobile()} className="ico">
                                                <FontAwesomeIcon icon={faBars} size='3x'/>
                                            </div>
                                    </div>
                                    <div className="container">
                                        <div className="logo">
                                    <h2>Mertin Potions</h2>
                                    <div className="relative">
                                            <p>Fine Potions since 1026</p>
                                            <div className="linha-absolute"></div>
                                            <div className="linha-absolute"></div>

                                        </div>
                                   
                                        </div>
                                    </div>
                                    <div className="container">
                                    <p>{this.props.carrinho}</p>
                                        <FontAwesomeIcon icon={faShoppingCart}  size="2x" />
                                        </div>
                        </div>
                </header>
        );

    }


}