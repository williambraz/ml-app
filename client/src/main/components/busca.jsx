import React from 'react'

import { browserHistory } from 'react-router'

export default class Busca extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            search: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        browserHistory.push('/items?search='+this.state.search)
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    handleKeyPress(event){
        if (event.charCode == 13) {
            event.preventDefault();
            event.stopPropagation();
            browserHistory.push('/items?search='+this.state.search)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Nunca deixe de buscar' value={this.state.search} onChange={this.handleChange} onKeyDown={this.handleKeyPress}/>
                <button type='submit'><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
            </form>
        )
    }
}