import { styled } from 'styled-components'
import ReactLoading from 'react-loading'

const InlineLoading = styled(ReactLoading).attrs((props) => ({
  type: 'spin',
  width: 30,
  height: 30,
}))`
  margin: 0 auto;
`

export default InlineLoading
