import React from 'react'
import styled from 'styled-components/native'
import {Image} from 'react-native'
import {icons} from 'lib'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const IconContainer = styled.View`
  ${(props: IconProps) => props.marg && `margin: ${props.marg};`}
  ${(props: IconProps) => props.pad && `padding: ${props.pad};`}
`

const Icon = (props: IconProps) => {
  if (!props.type) return null

  return (
    <IconContainer {...props}>
      <Image
        source={icons[props.type]}
        style={{
          width: props.width
            ? wp(props.width)
            : props.size
            ? wp(props.size)
            : 25,
          height: props.height
            ? hp(props.height)
            : props.size
            ? wp(props.size)
            : 25,
          alignSelf: 'center',
        }}
      />
    </IconContainer>
  )
}

export default Icon
