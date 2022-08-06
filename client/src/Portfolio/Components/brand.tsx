import React from 'react'
import styled from '@emotion/styled'

import logo from './logo.png'

const Logo = styled.img`
  margin-left: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  transform: rotate(21deg);
`

export default (): JSX.Element => <Logo src={logo} />
