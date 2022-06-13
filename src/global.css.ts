import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Hind+Madurai:wght@300;500;600;700&display=swap');

  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
  }
`