import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown} from '@fortawesome/free-solid-svg-icons'
import '../Main.scss';
import './style.scss';
 
export default class NavDesktop  extends Component{

        render(){
            const SetaBaixo =()=>{ return <FontAwesomeIcon  className="icoSeta" icon={faSortDown} />}
            return(
                
                    <section className="menu-desktop">
                        <div className="flex center">
                            <div className="container">
                                    <nav>
                                        <ul>
                                        <div className="relative "> <div className="seta"><SetaBaixo/></div><li><a href="">Potions</a></li></div>
                                        <div className="relative">  <div className="seta"><SetaBaixo/></div>   <li><a href="">Ingredients</a></li></div>
                                        <div className="relative">    <div className="seta"><SetaBaixo/></div> <li><a href="">Book</a></li></div>
                                        <div className="relative">   <div className="seta"><SetaBaixo/></div>   <li><a href="">Supplies</a></li></div>
                                        <div className="relative">   <div className="seta"><SetaBaixo/></div> <li><a href="">Charms</a></li></div>
                                        <div className="relative ativo">  <div className="seta"></div>   <li ><a href="">Clearence!</a></li></div>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="container flex">
                                        <div className="sub-container">
                                                <a href="">Sing In</a>
                                        </div>
                                        <div className="sub-container">
                                                    <span> or</span>
                                            </div>
                                            <div className="sub-container">
                                                <a href="">Sing Up</a>
                                            </div>
                                    </div>
                                    </div>  
                                    </section>
            );
        }
 }