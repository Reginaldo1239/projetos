import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faPinterest, faTwitter,faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import './style.scss';


  export default class Footer extends Component{

    render(){

        return(
            <footer>
                <div className="center flex">
                    <div className="container">
                    
                        <div className="box-texto flex">
                         
                                <div className="li">
                                        <a href="">Company</a>
                                    </div>
                                    <div className="li">
                                        <a href="">Contact Us</a>
                                    </div>
                                    <div className="li">
                                    <   a href="">Shipping</a>
                                    </div>
                                    <div className="li">
                                        <a href="">Returns</a>
                                    </div>
                                    <div className="li">
                                        <a href="">Careers</a>
                                    </div>
                                
                            </div>
                        <div className="box-icos flex">
                                    <div className="box-ico">
                                          <FontAwesomeIcon icon={faFacebook} className="cor-ico" size="3x" />
                                        </div>
                                        <div className="box-ico">
                                                <FontAwesomeIcon icon={faTwitter} className="cor-ico" size="3x" />
                                        </div>
                                        <div className="box-ico">
                                                 <FontAwesomeIcon icon={faPinterest} className="cor-ico" size="3x" />
                                        </div>
                                        <div className="box-ico">
                                        <FontAwesomeIcon icon={faTwitter} className="cor-ico"  size="3x" />
                                        </div>
                                        <div className="box-ico">
                                        <FontAwesomeIcon icon={faGooglePlus} className="cor-ico" size="3x" />
                                        </div>


                            </div>
                            <div className="box-texto">
                                    <p>2015 Merlin´s Potions. All Rights Reserved</p>
                                </div>   
                    </div>
                    <div className="container">
                            
                        <div className="form">
                        <div className="box-texto">
                                    <p>Sign up for our Newsletter</p>
                                </div>
                                <div className="box-texto">
                                <p>Sign up for our newsletter  get exclusive discounts! </p>
                                </div>
                                <form>
                                        <input type="text" placeholder="Enter your email"/>
                                        <input type="submit" value="SUBMIT"/>
                                    </form>
                            </div>
                         </div>
                         </div>
            </footer>

        );
    }


  }