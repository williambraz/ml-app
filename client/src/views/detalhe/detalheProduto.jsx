import React from 'react'
import DetalheDescricao from './DetalheDescricao'

export default class Detalhe extends React.Component {
    
    constructor(props){
        super(props)

        this.renderImagem = this.renderImagem.bind(this)
        this.renderDescricao = this.renderDescricao.bind(this)
    }

    renderImagem(){
        const info = this.props.info
        if (info.id){
            return(
                <img src={info.pictures[0].url}/>
            )
        }  
    }
    
    renderDescricao(){
        const info = this.props.info
        if (info.id){
            return(
                <DetalheDescricao id={info.id}/>
            )
        }  
    }

    render() {
        const info = this.props.info     
        return (
            <div className='produto'>
                <div className='capa'>
                    <img src={info.pictures[0].url}/>
                </div>
                <div className='info'>
                    <div>
                        <h2>{info.title}</h2>
                        <span className='preco'>R$ {info.price}</span>
                        <button>Comprar</button>
                    </div>
                </div>
                <DetalheDescricao id={info.id}/>
            </div>
        )
    }
}
