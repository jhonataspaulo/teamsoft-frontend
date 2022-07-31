import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ShoppingCartIcon } from './Icons'
import { Popover } from './Popover'

type Props = {
  visible: boolean
  qtd: number
}

export const Cart: React.FC<Props> = (props): JSX.Element => {
  const theme = useTheme()

  return (
    <Wrapper {...props}>
      <CartBox>
        <ShoppingCartIcon color={theme.colors.PRIMARY_DEFAULT} />
        <DotWrapper {...props}>
          <span>{props.qtd}</span>
        </DotWrapper>
        <Popover visible={props.visible} />
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
const DotWrapper = styled.div<Props>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.SECONDARY_DEFAULT};
  margin-top: -1rem;
  margin-right: -1rem;

  right: 0;
  top: 0;

  align-items: center;
  justify-content: center;

  & span {
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 1rem;
  }

  display: ${props => (props.qtd > 0 ? 'flex' : 'none')};
`
