import React from 'react'
import styled, { useTheme } from 'styled-components'
import { UserIcon } from './Icons'

export const Login = (): JSX.Element => {
  const theme = useTheme()

  return (
    <Wrapper>
      <UserIcon color={theme.colors.PRIMARY_DEFAULT} />
      <span>Entrar</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.PRIMARY_DEFAULT};
  font-size: 1.6rem;

  span {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    display: none;
  }
`
