import React from 'react'
import {GestureResponderEvent} from 'react-native'
import styled from 'styled-components/native'
import {textStyles} from 'styles'

interface FontProps {
  weight?: number
  isBold?: boolean
}

interface StyledTextProps extends TextProps {
  font: string
}

interface MyTextProps extends TextProps {
  bold?: boolean
  weight?: string
  onClick?: (event: GestureResponderEvent) => void | undefined
  children: React.ReactNode
}

const getFont = ({weight, isBold}: FontProps) => {
  // get font type
  const type = 'Quicksand-'

  // switch between weights
  let font = type
  switch (true) {
    case isBold:
      font = `${type}Bold`
      break

    case weight && weight < 400:
      font = `${type}Light`
      break

    case weight === 400:
      font = `${type}Regular`
      break

    case weight && weight < 700:
      font = `${type}SemiBold`
      break

    default:
      font = `${type}Regular`
  }

  return font
}

const StyledText = styled.Text`
  font-family: ${(props: StyledTextProps) => props.font};
  ${(props: StyledTextProps) => textStyles(props)}
`

const Text = (props: MyTextProps) => {
  const {bold, weight} = props

  // android doesn't recognize different fonts with weights,
  // custom getFont function is required
  const font = getFont({
    isBold: bold || weight === '700',
    weight: weight ? Number(weight) : 0,
  })

  return (
    <StyledText font={font} {...props} onPress={props.onClick}>
      {props.children}
    </StyledText>
  )
}

export default Text
