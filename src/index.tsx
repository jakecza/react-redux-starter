import { SplashScreen } from 'components/SplashScreen'
import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from 'state'

import App from './App'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<SplashScreen />}>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
