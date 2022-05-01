import React from 'react'
import {Icon, Row, Text} from 'components'
import {theme} from 'lib'

function Header() {
  return (
    <Row noFlex between pad="20px 20px">
      <Text color={theme.WHITE} bold size="18px" pad="10px">
        Portfolio
      </Text>
      <Icon type="portfolio" size={5} />
    </Row>
  )
}

export default Header
