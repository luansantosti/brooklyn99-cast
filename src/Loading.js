import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconLoading } from './assets/loading.svg'

const StyledLoading = styled.div`
  background: #232323;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #484848;
`

const Loading = () => (
  <StyledLoading>
    <IconLoading />
    <p>Loading...</p>
  </StyledLoading>
)

export default Loading