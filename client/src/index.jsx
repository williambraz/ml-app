import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './main/routes'

//http://localhost:3005/items/MLA649381724
//http://localhost:3005/items?search=ML
//gem install sass
//sass --watch scss/app.scss:css/app.css

ReactDOM.render(<Routes />, document.getElementById('app'));