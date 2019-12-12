import React, { Component } from 'react';

import './App.css';
import Header from './Header/index'
import MenuMobile from './menu-mobile'
import NavDesktop from './nav-desktop';
import Produtos from './produtos'
import Footer from './footer'

  class App extends Component{

    constructor(props){
      super(props);
       this.state = {
          sombraVisivel:false,
          carrinho:Object.values(localStorage),
          menuVisivel:false,
       }
        }
                  ativarSombra = ()=>{
                    if(!this.state.sombraVisivel){
                    this.setState({sombraVisivel:true})
                                }
                    }


                      desativarSombra = ()=>{
                    if(this.state.sombraVisivel)
                    this.setState({sombraVisivel:false})
                      }

    
                  visivelMenuMobile =()=>{
                    if(this.state.menuVisivel==false){
                    this.setState({menuVisivel:true})
                  }else{
                    this.setState({menuVisivel:false});
                  }
                }
 render(){
  const Sombra =()=>{
   
    if(this.state.sombraVisivel){
      return <div className="sombra"></div>
    }
    return null
}

const menuVisivel =this.state.menuVisivel;
 
      return(
        
    
     
        
  
      
      <div>
        <Sombra/>
        <Header menuMobile={()=>this.visivelMenuMobile.bind()} carrinho={this.state.carrinho.length} />
           {menuVisivel?( <MenuMobile fecharMenuMobile={()=>this.visivelMenuMobile.bind()}  />):(<span></span>)}
        <NavDesktop/>
        <Produtos  abrir={this.ativarSombra.bind()} fechar={this.desativarSombra.bind()} title={'Potions'}/>
        <Footer/>
    </div>
    );
      }
    };
   
   /* var a =   api.get('/category/Programming').then(function (ete) {
    
      console.log(ete.data)
    });
    console.log(a)
  */
export default App;
