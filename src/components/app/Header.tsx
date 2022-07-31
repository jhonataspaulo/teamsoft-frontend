import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { useCart } from '../../hooks/useCart'
import { Address } from '../Address'
import { Cart } from '../Cart'
import { CaretLeftIcon } from '../Icons'
import { Login } from '../Login'
import { Search } from '../Search'

export const Header: React.FC<{}> = (): JSX.Element => {
  const { cart, newCartNotification } = useCart()

  return (
    <Wrapper>
      <HeaderContent>
        <Image src={logo} width={225} />
        <Options>
          <Address />
          <Search />
          <Login />
          <Cart visible={newCartNotification} qtd={cart?.length || 0} />
        </Options>
        <CaretBox>
          <CaretLeftIcon height={16} />
        </CaretBox>
      </HeaderContent>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 1.6rem 4rem;
  background-color: ${props => props.theme.colors.WHITE_BACKGROUND};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  @media (max-width: 576px) {
    justify-content: center;
    padding: 1.6rem;
  }
`

const HeaderContent = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (max-width: 576px) {
    justify-content: center;
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

const CaretBox = styled.div`
  display: none;

  @media (max-width: 576px) {
    position: absolute;
    left: 0;
    display: block;
  }
`
