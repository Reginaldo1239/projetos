import React,{Component} from 'react';
import Produto from'../produto';
import Servicos from '../servicos/api'
import ProdutoDetalhe from '../produtoDetalhe'
import './style.scss';
import '../Main.scss';






export default class Produtos extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
          data:{},
          visivelProdutoDetalhe:false,
          objectProdutoDetalhe:{},
          
        };
     
      }
        
   
      
        
        todosProdutos = []
        
      componentDidMount(){       
                     fetch('http://localhost:3004/potions').then(response=>  response.json())
                     .then(data=> { this.setState({data: data} ) });
                   
                        }

      exibirProdutoDetalhe =(id)=>{
                              
               Object.values(this.state.data).map((el,index)=>{  
                 if(el['id']==id){
                  this.setState({ objectProdutoDetalhe:el,visivelProdutoDetalhe:true});
                     
                  
                   }
              });        
      }
      
      teste = (id)=>{
        
        localStorage.setItem(id,id)

        console.log(Object.values(localStorage).length)
        console.log(localStorage);
        window.location.reload();
        

      }
      fecharProdutoDetalhe = ()=>{
          this.setState({visivelProdutoDetalhe:false})
          this.props.fechar();
          console.log('a')
      }
    
   
    render(){
      localStorage.setItem('addCarrinho',[])
      console.log(this.state.objectProdutoDetalhe)
   
             Object.values(this.state.data).map((el,i)=>{
        
                this.todosProdutos.push(<Produto  produto={this.exibirProdutoDetalhe.bind()} 
              />);

             })
           
             const ProdutoDetalheVisivel=()=> {

              if(this.state.visivelProdutoDetalhe){
        
                this.props.abrir();
              return   <ProdutoDetalhe  fecharProdutoDetalhe={this.fecharProdutoDetalhe.bind()} 
              carrinho={this.teste.bind()}
               imagem={this.state.objectProdutoDetalhe['image']}
               nome={this.state.objectProdutoDetalhe['name']}
               preco={this.state.objectProdutoDetalhe['price']}
               ingredients={this.state.objectProdutoDetalhe['ingredients']}
               id={this.state.objectProdutoDetalhe['id']}
                        />
              }
                return null

              
            }

              const Sombra =()=>{
                  if(this.state.visivelProdutoDetalhe){
                    return <div className="sombra"></div>
                  }
                  return null
              }
        return(
         
            <section className="produtos " >
         
                <div className="center">
                
                  <ProdutoDetalheVisivel/>
               
                            <div className="titulo">
                                </div>
                                <div className="flex">
                                    {/*this.todosProdutos*/}
                            
                            {Object.values(this.state.data).map((el,i)=>{
         return <Produto     key={el.id} 
         id={el.id} 
         image={el.image}
         nome={el.name}
         preco={el.price} Onclick={this.props.cc} produto={this.exibirProdutoDetalhe.bind()}   />
                           })}
                                    </div>

                        </div>
                </section>
        
        );
    }
} 