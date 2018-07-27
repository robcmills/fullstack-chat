import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './login'

const Router = () =>
	<BrowserRouter>
		<Route path="/login" component={Login} />
  </BrowserRouter>

export default Router
