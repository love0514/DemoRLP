import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { reaction } from 'mobx'
import { Route, Redirect,Switch ,withRouter} from 'react-router-dom'

import HomePage from '../layouts/login'

class layout extends React.Component{
    constructor(props) {
        super(props)
    
    }
    render(){
        return(
            <Switch>
             <Route exact path="/" component={HomePage} />
            </Switch>
        )
    }
}
export default withRouter(layout)
