import React, {useEffect} from 'react'
import {Col, Icon, Row, Text} from 'components'
import {theme} from 'lib'
import AnimatedNumber from './AnimatedNumber'
import Fluctuation from '../Fluctuation'
import {StateContext} from 'store'

function Info() {
  const state = React.useContext(StateContext)
  const [animateToNumber, setAnimateToNumber] = React.useState(state.value)
  const [fluctuation, setFluctuation] = React.useState({
    value: '0',
    percentage: '0',
    type: 'none',
  })

  useEffect(() => {
    setAnimateToNumber(state.value)
  }, [state.value])

  useEffect(() => {
    let difference = state.value - state.initial
    let percentageDiff = (difference / state.initial) * 100

    setFluctuation({
      value: Number(difference).toFixed(2),
      percentage: Number(percentageDiff).toFixed(2),
      type:
        difference > 0 ? 'increment' : difference < 0 ? 'decrement' : 'none',
    })
  }, [state.value, state.initial])

  return (
    <Row noFlex between pad="0 20px 0 28px">
      <Row noFlex alignCenter>
        <AnimatedNumber number={animateToNumber} />
        <Icon type="bar-graph" marg="0 0 0 10px" size={6} />
        <Fluctuation
          percentage={fluctuation.percentage}
          value={fluctuation.value}
          type={fluctuation.type}
        />
      </Row>
      <Col noFlex endAlign>
        <Text textTransform="uppercase" color={theme.GRAY_2} bold>
          {fluctuation.type === 'decrement' ? 'Loss' : 'Profit'}
        </Text>
        <Row centerAll>
          <Text color={theme.WHITE} bold>
            {fluctuation.value}
          </Text>
          <Icon type="bar-graph" marg="0 0 0 10px" size={3.2} />
        </Row>
      </Col>
    </Row>
  )
}

export default Info
