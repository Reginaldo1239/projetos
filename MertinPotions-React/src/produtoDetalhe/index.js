import React,{Component} from 'react';
import './style.scss';
import '../Main.scss';


class ProdutoDetalhe extends Component{
        constructor(props){
                super(props);
                        this.state={
                        path:require('../assets/produtos/'+ this.props.imagem),
                      
                        }
                }
        
                carrinho =()=> {
                        console.log('sddss')
                }

        render(){
         
                const  Ingredientes = ()=>{
                        let x=[]
                        this.props.ingredients.map((element,index)=>{
                        x.push(<p key={index}>{element}</p>)
                        })
                        return x
                    }
       
                     
           return(
                   
                        
                    <div className="produto-detalhe flex">
                                <div className="fechar" onClick={()=>this.props.fecharProdutoDetalhe()}>X</div>
                            <div className="container">
                                <div className="img">
                                <img src={this.state.path}></img>
                                </div>
                           
                            </div>
                            <div className="container">
                                    <div className="box-texto">
                                                <h2>{this.props.nome}</h2>
                                        </div>
                                        <div className="box-texto">
                                                Use Efects
                                        </div>
                                        <div className="box-texto">
                                                <h2>Ingredients</h2>
                                                <Ingredientes/>
                                        </div>
                                        <div className="box-texto">
                                           <p>{this.props.preco}</p>
                                        </div>
                                        <div className="box-texto">
                                                <button onClick={()=>this.props.carrinho(this.props.id)}>Add  Cart</button>
                                        </div>
                                
                                </div>

                        </div>            )  ;    
                    
        }
}
export default ProdutoDetalhe;