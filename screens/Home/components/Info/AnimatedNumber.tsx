import {Row, Text} from 'components'
import {theme} from 'lib'
import React, {useEffect, useState} from 'react'
import AnimatedNumbers from 'react-native-animated-numbers'
import {RFValue} from 'react-native-responsive-fontsize'

interface NumberProps {
  number: number
}

let timeout: NodeJS.Timeout | null = null
function AnimatedNumber({number}: NumberProps) {
  const [changeType, setChangeType] = useState<null | string>(null)
  const [numberSection, setNumberSection] = useState({
    base: 0,
    decimal: 0,
  })

  useEffect(() => {
    if (number > numberSection.base + Number('0.' + numberSection.decimal)) {
      setChangeType('positive')
    } else {
      setChangeType('negative')
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      setChangeType(null)
    }, 550)
    setNumberSection({
      base: Math.floor(number),
      decimal: Number((number % 1).toFixed(2).replace('0.', '')),
    })

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [number])

  return (
    <Row noFlex alignEnd>
      <AnimatedNumbers
        animateToNumber={numberSection.base}
        animationDuration={500}
        fontStyle={{
          fontSize: RFValue(28),
          fontWeight: 'bold',
          color:
            changeType && changeType === 'positive'
              ? theme.GREEN
              : changeType === 'negative'
              ? theme.RED
              : theme.WHITE,
        }}
      />
      {numberSection.decimal > 0 && (
        <React.Fragment>
          <Text
            size="28px"
            color={
              changeType && changeType === 'positive'
                ? theme.GREEN
                : changeType === 'negative'
                ? theme.RED
                : theme.WHITE
            }
            marg="0 4px 0 0">
            .
          </Text>
          <AnimatedNumbers
            animateToNumber={numberSection.decimal}
            fontStyle={{
              fontSize: RFValue(28),
              fontWeight: 'bold',
              color:
                changeType && changeType === 'positive'
                  ? theme.GREEN
                  : changeType === 'negative'
                  ? theme.RED
                  : theme.WHITE,
            }}
          />
        </React.Fragment>
      )}
    </Row>
  )
}

export default AnimatedNumber
