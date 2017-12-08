import React from 'react'
import { Router, Route, Redirect, browserHistory, IndexRoute} from 'react-router'

//Tipos de Layout de tela
import Template from './template'

//Import das telas
import Home from 'views/home/home'
import Resultado from 'views/resultado/resultado'
import Detalhe from 'views/detalhe/detalhe'

export default props => (
    <Router history={browserHistory}>
      <Route component={Template}>
        <Route path='/' component={Home}/>
        <Route path='/items' component={Resultado}/>
        <Route path='/items/:id' component={Detalhe}/>
      </Route>
      <Redirect from='*' to='/' />
    </Router>
)