import "@babel/polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import initReactFastclick from 'react-fastclick';
// import asyncComponent from './component/asyncComponent'
import Loadable from 'react-loadable';
import '../dist/css/reset.scss'
import './containers/container.scss'
import Store from './store'
import { IntlProvider, addLocaleData } from 'react-intl';
// var path = require('path');
import zh from 'react-intl/locale-data/zh';//react-intl语言包
import en from 'react-intl/locale-data/en';//react-intl语言包

import Notifi from './containers/Notification'
// import Home from './containers/Home/Homepage'
// import AllCard from './containers/AllCards/AllCard'
// import Detail from './containers/CardDetail/CardDetail'
// import Credite from './containers/Credite/Credite'
// import Test from './component/DatePicker/DatePicker'

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    console.log(error)
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const asyncHome = Loadable({
  loader: () => import('./containers/Home/Homepage'),
  loading: MyLoadingComponent
})
// console.log(asyncHome)
const asyncAllCard = Loadable({
  loader: () => import('./containers/AllCards/AllCard'),
  loading: MyLoadingComponent
})
const asyncCredite = Loadable({
  loader: () => import('./containers/Credite/Credite'),
  loading: MyLoadingComponent
})
const asyncDetail = Loadable({
  loader: () => import('./containers/CardDetail/CardDetail'),
  loading: MyLoadingComponent
})

addLocaleData([...en, ...zh]);//需要放入本地数据库

window.con = Store.mobXUIStore
window.data = Store.mobXDataStore
initReactFastclick();

render(
  <IntlProvider
  // locale={init.Getlanguage}
  // messages={init.GetMessages}
  >
    <Router>
      <Provider store={Store.mobXUIStore} datastore={Store.mobXDataStore}>
        <div className="container">
          {/* <Switch> */}
          <Route exact path="/" component={asyncHome} />
          <Route exact path="/Cards" component={asyncAllCard} />
          <Route exact path="/Detail" component={asyncDetail} />
          <Route exact path="/Credite" component={asyncCredite} />
          <Route exact path="/Test" component={Notifi} />
          <Redirect from='*' to='/' />
          {/* </Switch> */}
        </div>
      </Provider>
    </Router>
  </IntlProvider>
  ,
  document.getElementById('root')
)