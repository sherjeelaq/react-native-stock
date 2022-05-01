import React from 'react'
import {StatusBar} from 'react-native'
import {StateContextProvider} from 'store'
import Home from './Home'

function Screens() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <StateContextProvider>
        <Home />
      </StateContextProvider>
    </React.Fragment>
  )
}

export default Screens
