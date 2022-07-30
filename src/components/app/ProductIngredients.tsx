import React from 'react'
import styled from 'styled-components'

export const ProductIngredients: React.FC<{}> = (): JSX.Element => {
  return (
    <Wrapper>
      <WrapperIngredients>
        <h1>Ok</h1>
      </WrapperIngredients>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #ccc;
  color: #000;
  padding: 2.4rem;
`

const WrapperIngredients = styled.div`
  height: 100%;
  max-width: 43.9rem;
  margin: 0 auto;
`
