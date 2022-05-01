import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {RFValue as rf} from 'react-native-responsive-fontsize'

const removePx = (size: number | string) => {
  let tempSize = size.toString()
  if (typeof size === 'string' && tempSize.includes('px')) {
    tempSize = tempSize.replace('px', '')
  }
  return tempSize
}

const getWidth = (wid: number | string) => {
  return `${wp(Number(removePx(wid)))}px`
}

const getHeight = (ht: number | string) => {
  return `${hp(Number(removePx(ht)))}px`
}

const getFontSize = (size: number | string) => {
  return `${rf(Number(removePx(size)))}px`
}

export {getWidth, getHeight, getFontSize}
