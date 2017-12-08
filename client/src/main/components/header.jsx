import React from 'react'
import Busca from './busca'
import Logo from './logo'

export default class Header extends React.Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
            <header>
                <div className="headerContainer">
                    <Logo/>
                    <Busca/>
                </div>
            </header>
        )
    }
}