import React from 'react'
import styled, { useTheme } from 'styled-components'
import { CaretDownIcon } from './Icons'

export const Address = () => {
  const theme = useTheme()
  return (
    <AddressWrapper>
      <AddressContent>
        <span>Entrega</span>
        <span>R. Antônio Braune, 222</span>
      </AddressContent>
      <CaretDownIcon
        width={12}
        height={8}
        color={theme.colors.RED_DELIVERIZE}
      />
    </AddressWrapper>
  )
}

const AddressWrapper = styled.div`
  min-width: 23rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;

  @media (max-width: 1200px) {
    display: none;
  }
`

const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & span:first-child {
    color: ${({ theme }) => theme.colors.RED_DELIVERIZE};
    font-size: 1.2rem;
  }

  & span:last-child {
    color: ${({ theme }) => theme.colors.GRAY_DARK};
    font-size: 1.2rem;
    font-weight: 700;
  }
`
