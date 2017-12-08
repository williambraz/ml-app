import React from 'react'
import Header from './components/header'

//import de css e do arquivo de config
import 'font-awesome/css/font-awesome.min.css';
import '../common/assets/css/app.css'
import '../common/assets/js/config.js'

export default class Template extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div> 
        )
    }
}