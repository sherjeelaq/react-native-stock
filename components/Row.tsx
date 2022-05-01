import styled from 'styled-components/native'
import {rowStyles} from 'styles'

const Row = styled.View`
  ${(props: RowProps) => rowStyles(props)};
`

export default Row
