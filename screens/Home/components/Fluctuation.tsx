import React, {useMemo} from 'react'
import {Icon, Row, Text} from 'components'
import {theme} from 'lib'

interface FluctuationProps {
  noPercentage?: boolean
  value?: string | number
  percentage?: string
  type?: string
}
function Fluctuation({
  noPercentage,
  value,
  percentage,
  type,
}: FluctuationProps) {
  const isDecrement = useMemo(() => {
    return type && type === 'decrement'
  }, [type])
  return (
    <Row noFlex marg="0 0 0 10px" alignCenter>
      <React.Fragment>
        <Icon type={isDecrement ? 'down' : 'up'} size={2} />
        <Text
          color={isDecrement ? theme.RED : theme.GREEN}
          bold
          size="12px"
          marg="0 0 0 4px">
          {value}{' '}
          {!noPercentage && (
            <Text
              color={isDecrement ? theme.RED : theme.GREEN}
              bold
              size="12px">
              ({percentage}%)
            </Text>
          )}
        </Text>
      </React.Fragment>
    </Row>
  )
}

export default Fluctuation
