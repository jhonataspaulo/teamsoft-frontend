import React from 'react'
import styled from 'styled-components'

export const ProductInfo: React.FC<{}> = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>ProductInfo</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #c2c2c2;
  color: #000;
  padding: 2.4rem;
  overflow-y: auto;
`
