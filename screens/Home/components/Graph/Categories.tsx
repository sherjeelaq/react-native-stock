import {Row, Text} from 'components'
import {theme} from 'lib'
import React from 'react'
import {ScrollView, TouchableOpacity} from 'react-native'

interface Option {
  type: string
  data: {
    labels: string[]
    datasets: {
      data: number[]
      strokeWidth: number
    }[]
  }
}
interface CategoriesProps {
  handleOption: ({type, data}: Option) => void
  options: Option[]
  selected: string
}

function Categories({handleOption, options, selected}: CategoriesProps) {
  return (
    <ScrollView horizontal={true}>
      {options.map(option => {
        return (
          <TouchableOpacity
            onPress={() => handleOption(option)}
            key={option.type}>
            <Row
              noFlex
              marg="16px 0px 10px 15px"
              pad="3px 6px"
              hasRadius="7px"
              bg={selected === option.type ? theme.GRAY_5 : 'transparent'}>
              <Text
                textTransform="uppercase"
                color={theme.WHITE}
                bold
                size="11px">
                {option.type}
              </Text>
            </Row>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

export default Categories
