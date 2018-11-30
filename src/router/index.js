import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Store from '../store'
import layout from './layout'

class Route_index extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <Provider store={Store.mobXUIStore} datastore={Store.mobXDataStore}>
          <div className="Woodoos_container">
            <Route component={layout} />
          </div>
        </Provider>
      </Router>

    )
  }
}
export default Route_index