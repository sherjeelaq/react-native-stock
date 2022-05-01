import {Col, Row, Text} from 'components'
import {theme} from 'lib'
import React from 'react'
import {FlatList} from 'react-native-gesture-handler'
import CollectionItem from './CollectionItem'

function Collections() {
  const data = [
    {
      id: 1,
      name: 'Azuki',
      token: 1,
      type: 'increment',
      number: 18.95,
    },
    {
      id: 2,
      name: 'Papa Johns',
      token: 1,
      type: 'increment',
      number: 12.95,
    },
    {
      id: 3,
      name: 'Ziak Official',
      token: 1,
      type: 'decrement',
      number: 2.95,
    },
    {
      id: 4,
      name: 'Fahazi',
      token: 2,
      type: 'increment',
      number: 14.2,
    },
    {
      id: 5,
      name: 'Azuki',
      token: 1,
      type: 'increment',
      number: 18.95,
    },
    {
      id: 6,
      name: 'Papa Johns',
      token: 1,
      type: 'increment',
      number: 12.95,
    },
    {
      id: 7,
      name: 'Ziak Official',
      token: 1,
      type: 'decrement',
      number: 2.95,
    },
    {
      id: 8,
      name: 'Fahazi',
      token: 2,
      type: 'increment',
      number: 14.2,
    },
  ]
  return (
    <Col pad="30px 20px 0">
      <Text
        textTransform="uppercase"
        color={theme.WHITE}
        bold
        size="11px"
        pad="0 0 8px">
        Collections
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <CollectionItem {...item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <Row
            bg={theme.GRAY_4}
            style={{
              height: 2,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Col>
  )
}

export default Collections
