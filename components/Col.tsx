import styled from 'styled-components/native'
import {colStyles} from 'styles'

const Col = styled.View`
  ${(props: ColProps) => colStyles(props)}
`

export default Col
