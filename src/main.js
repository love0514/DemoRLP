import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Index from './router'

import './main.scss'
import './reset.scss';
render(
  <Index />
  ,
  document.getElementById('root')
)