import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

export const Header: React.FC<{}> = (): JSX.Element => {
  return (
    <Wrapper>
      <HeaderContent>
        <Image src={logo} width={225} />
        <Options>
          <div>Address</div>
          <div>Input</div>
          <div>Input</div>
          <div>Login</div>
          <div>Carrinho</div>
        </Options>
      </HeaderContent>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 8rem;
  padding: 1.6rem 4rem;
  background-color: ${props => props.theme.colors.WHITE_BACKGROUND};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.15);
`

const HeaderContent = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`
