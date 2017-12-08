import React from 'react'
import {Link} from 'react-router'

export default class ResultadoItem extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const info = this.props.info
        return (
            <li>    
                <Link to={'/items/'+info.id}>
                    <img src={info.thumbnail}/>
                </Link>
                <div>
                    <span>R$ {info.price}</span>
                    <h2><Link to={'/items/'+info.id}>{info.title}</Link></h2>
                </div>
            </li>
        )
    }
}