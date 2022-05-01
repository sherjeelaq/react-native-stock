import {Avatar, Col, Row, Text} from 'components'
import {theme} from 'lib'
import React from 'react'
import Fluctuation from '../Fluctuation'

interface Item {
  id: number
  name: string
  token: number
  type: string
  number: number
}

function CollectionItem({id, name, token, type, number}: Item) {
  return (
    <Row noFlex between pad="14px 0">
      <Row alignCenter>
        <Avatar text={name.substring(0, 1)} size={13} bg={theme.GRAY_3} />
        <Col noFlex marg="0 0 0 15px">
          <Text color={theme.WHITE} bold size="14px">
            {name}
          </Text>
          <Text color={theme.GRAY_3} bold size="12px">
            {token} {token <= 1 ? 'token' : 'tokens'}
          </Text>
        </Col>
      </Row>
      <Fluctuation noPercentage value={number} type={type} />
    </Row>
  )
}

export default CollectionItem
