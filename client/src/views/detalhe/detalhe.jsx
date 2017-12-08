import React from 'react'
import axios from 'axios'
import DetalheProduto from './DetalheProduto'
import Relacionados from 'main/components/relacionados'

export default class Detalhe extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            info: {}
        }

        this.loadData = this.loadData.bind(this)
    }

    loadData(){
        const self = this
        const id = this.props.params.id
        const url = window.config.api.domain + window.config.api.search + '/' + id
        axios.get(url)
        .then(function (response) {
            self.setState({
                info: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentWillMount(){
        this.loadData()
    }

    renderProduto(){
        const info = this.state.info
        if (info.id){
            return(
                <DetalheProduto info={info}/>
            )
        }  
    }

    render() {
        return (
            <section className='main detalhe'>
                <Relacionados/>
                {this.renderProduto()}
            </section>
        )
    }
}