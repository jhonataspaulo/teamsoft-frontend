import React from 'react'
import styled, { useTheme } from 'styled-components'
import { formatCurrencyToBr } from '../../utils/FormatCurrencyToBr'
import { MinusIcon, PlusIcon } from '../Icons'

type Props = {
  title: string
  price: number
  qtd: number
  onMinus: () => void
  onPlus: () => void
  color?: string
}

export const ProductItem: React.FC<Props> = (props): JSX.Element => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Content>
        <Left>
          <span>{props.title}</span>
          <span>+ {formatCurrencyToBr(props.price)}</span>
        </Left>
        <Right>
          <Count>
            <MinusIcon
              onClick={props.onMinus}
              color={props.color || theme.colors.GRAY_LIGHT}
            />
            <span>{props.qtd}</span>
            <PlusIcon
              onClick={props.onPlus}
              color={theme.colors.RED_DELIVERIZE}
            />
          </Count>
        </Right>
      </Content>
      <Line />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background-color: #ccc; */
  :first-child {
    margin-top: 1.6rem;
  }
`

const Content = styled.div`
  /* background-color: #ccc; */
  margin: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  span {
    font-size: 1.4rem;

    :first-child {
      font-weight: 500;
    }

    :last-child {
      color: ${props => props.theme.colors.SECONDARY_DEFAULT};
    }
  }
`

const Right = styled.div``

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.8rem;
  border: 0.1rem solid ${props => props.theme.colors.SECONDARY_DEFAULT};
  border-radius: 0.5rem;

  span {
    font-size: 1.4rem;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
  background-color: ${props => props.theme.colors.SECONDARY_LIGHT};
`
