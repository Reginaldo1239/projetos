import React,{react, Component} from 'react';

import './style.scss';




export default class Produto extends Component{

    constructor(props){
        super(props);
        this.state={
            a:true,
        }
     
     
        

    }
    
    getProdutoDetalhe(id){
        console.log(id);
        console.log('aaa')
        const produtoDetalhe = this.props;
            if(produtoDetalhe !== undefined){
                console.log('filho')
            }
        }
        handleChange(){
            this.props.a = true;
            console.log('filho')
        }

        a(){
            console.log('filho')
        }


    render(){     
  
      
        return(
       
            <div onClick={()=>this.props.produto(this.props.id)} className="produto"  key={this.props.id} id={this.props.id} >
                    <div className="flex"   >
                       
                            <div className="img" >
                                <img src={require('../assets/produtos/'+this.props.image)}/>
                            </div>
                            <div className="texto">
                                      <a><span>{this.props.nome}</span><span>{this.props.preco}</span></a>
                   
                            </div>
                        </div>
                      
                </div>
        );
    }

}