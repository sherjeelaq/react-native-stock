import React from 'react'
import {Col} from 'components'
import {SafeAreaView} from 'react-native'
import {theme} from 'lib'
import {Collections, Header, Info, Graph} from './components'

function Home() {
  return (
    <Col bg={theme.DARK_BLACK}>
      <Col>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <React.Fragment>
            <Header />
            <Info />
            <Graph />
            <Collections />
          </React.Fragment>
        </SafeAreaView>
      </Col>
    </Col>
  )
}

export default Home
