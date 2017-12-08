import React from 'react'
import axios from 'axios'

export default class DetalheDescricao extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            descricao: ''
        }

        this.loadData = this.loadData.bind(this)
    }

    loadData(){
        const self = this
        const id = this.props.id
        const url = window.config.api.domain + window.config.api.search + '/' + id + window.config.api.description
        axios.get(url)
        .then(function (response) {
            console.log(response)
            if (response.data.text != ''){
                self.setState({
                    descricao: response.data.text
                })
            }else{
                self.setState({
                    descricao: response.data.plain_text
                }) 
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentWillMount(){
        this.loadData()
    }

    render() {
        const descricao = this.state.descricao
        return (
            <div className='descricao'>
                <span>Descrição do produto</span>
                <div dangerouslySetInnerHTML={{__html: descricao}} />
            </div>
        )
    }
}