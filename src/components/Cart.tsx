import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ShoppingCartIcon, UserIcon } from './Icons'

export const Cart = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Wrapper>
      <CartBox>
        <ShoppingCartIcon color={theme.colors.PRIMARY_DEFAULT} />
        <DotWrapper>
          <span>1</span>
        </DotWrapper>
      </CartBox>
      <span>Carrinho</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.PRIMARY_DEFAULT};
  }

  @media (max-width: 576px) {
    display: none;
  }
`

const CartBox = styled.div`
  position: relative;
`
const DotWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.SECONDARY_DEFAULT};
  margin-top: -1rem;
  margin-right: -1rem;

  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 1rem;
  }
`
