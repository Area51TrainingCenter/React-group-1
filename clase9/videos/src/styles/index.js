import { injectGlobal } from 'styled-components'
import { reset } from 'styled-reset'

export default () => injectGlobal`
  ${reset}

  body {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`