import React from 'react'
import {Image} from 'react-native'
import {getWidth, theme} from 'lib'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Col from './Col'
import Text from './Text'

function Avatar({url, text, size, bg, color, textSize}: AvatarProps) {
  if (!url && !text) return null
  return (
    <React.Fragment>
      {url ? (
        <Image
          source={{
            uri: url,
          }}
          style={{
            width: size ? wp(size) : wp(14),
            height: size ? wp(size) : wp(14),
            borderRadius: size ? wp(size) : wp(14),
          }}
          resizeMode="cover"
        />
      ) : (
        <Col
          noFlex
          size={`${size ? size : 24}px`}
          bg={bg ? bg : theme.BLACK}
          centerAll
          hasRadius={`${size ? getWidth(size!) : getWidth(24)}`}>
          <Text
            color={color ? color : theme.WHITE}
            size={textSize ? textSize : '14px'}
            pad={textSize ? textSize : '7px'}>
            {text}
          </Text>
        </Col>
      )}
    </React.Fragment>
  )
}
export default Avatar
