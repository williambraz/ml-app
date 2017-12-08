import React from 'react'
import axios from 'axios'
import ResultadoItem from './resultadoItem'
import Relacionados from 'main/components/relacionados'

export default class Resultado extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            results: []
        }

        this.loadData = this.loadData.bind(this)
    }

    loadData(){
        const self = this
        const search = this.props.location.query.search
        
        //limpa resultados anteriores
        this.setState({
            results: []
        })

        const url = window.config.api.domain + window.config.api.search + '?id=' + search
        axios.get(url)
        .then(function (response) {
            self.setState({
                results: response.data.results,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //verifica se houve alteração na query de busca e recarrega o serviço
    componentDidUpdate(prevProps){
        
        if(prevProps == undefined) {
            return false
        }

        if (prevProps.location.query.search != this.props.location.query.search){
            this.loadData()
        }
    }

    componentWillMount(){
        this.loadData()
    }

    render() {
        return (
            <section className='main resultado'>
                <Relacionados/>
                <ol>
                    {
                        this.state.results.slice(0,4).map((result,i) => <ResultadoItem key={i} info={result}/>
                    )}
                </ol>
            </section>
        )
    }
}