import React from 'react'
import styled, { useTheme } from 'styled-components'
import { SearchIcon } from './Icons'

export const Search = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Input placeholder="Busque por estabelecimento ou produtos" />
      <SearchIcon color={theme.colors.GRAY_DARK} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 4.8rem;
  min-width: 35.4rem;
  border-radius: 0.4rem;
  padding: 0 1.52rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_DEFAULT};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${props => props.theme.colors.WHITE};

  @media (max-width: 576px) {
    display: none;
  }

  @media (max-width: 768px) {
    border: none;
  }

  @media (max-width: 900px) {
    min-width: auto;
  }
`

const Input = styled.input`
  font-size: 1.4rem;
  color: #000;
  font-size: 1.4rem;
  flex: 1;
  border: none;
  outline: 0;

  @media (max-width: 768px) {
    display: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY_DARK};
    font-size: 1.4rem;
  }
`
