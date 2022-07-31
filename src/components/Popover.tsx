import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCart } from '../hooks/useCart'

type Props = {
  visible: boolean
}

export const Popover: React.FC<Props> = (props): JSX.Element => {
  const { cart } = useCart()

  const product = cart ? cart[cart.length - 1] : null

  if (cart) {
    return (
      <Wrapper {...props}>
        <Header>
          <Arrow />
          <span>Adicionado com Sucesso!</span>
        </Header>
        <Body>
          <strong>{product?.productList.product.title}</strong>
          {product?.ingredientsList !== undefined &&
            product?.ingredientsList.length > 0 && <span>Ingredientes:</span>}
          <ul>
            {product?.ingredientsList.map(item => (
              <li key={item.ingredient.id}>
                {item.quantity} {item.ingredient.title}
              </li>
            ))}
          </ul>
        </Body>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper {...props}>
        <Header>
          <Arrow />
          <span>Nenhum item</span>
        </Header>
        <Body>
          <span>Nenhum item adicionado</span>
        </Body>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<Props>`
  position: absolute;
  left: -9rem;
  margin-top: 1rem;
  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));
  display: ${props => (props.visible ? 'block' : 'none')};
`

const Header = styled.div`
  width: 20.8rem;
  background-color: ${props => props.theme.colors.SECONDARY_DEFAULT};
  padding: 0.8rem 1.1rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  color: #fff;
  position: relative;
`

const Arrow = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${props => props.theme.colors.SECONDARY_DEFAULT};
  position: absolute;
  left: 50%;
  top: 0;
  margin-top: -0.2rem;
  transform: rotate(45deg) translateX(-50%);
`

const Body = styled.div`
  width: 20.8rem;
  background-color: #fff;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0.8rem 1.1rem;

  strong {
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.colors.RED_DELIVERIZE};
  }

  span {
    display: block;
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }

  ul li {
    font-size: 1.2rem;
  }
`
