import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import burger from '../../assets/burger.png'

export const ProductInfo: React.FC<{}> = (): JSX.Element => {
  return (
    <Wrapper>
      <BoxImage>
        <Image src={burger} alt="Imagem de hamburger com cheddar e bacon " />
      </BoxImage>
      <Info>
        <h1>Oferta Picanha Cheddar Bacon</h1>
        <p>
          Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo
          cheddar, molho cheddar e pão mix de gergelim.
        </p>
        <Prices>
          <span>R$ 32,99</span>
          <span>R$ 34,95</span>
        </Prices>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* background-color: #c2c2c2; */
  padding: 3.2rem 2.4rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }
`

const BoxImage = styled.div`
  max-width: 43.7rem;
  align-self: center;
`

const Info = styled.div`
  margin-top: 4.4rem;

  h1 {
    font-weight: 500;
    font-size: 2.8rem;
    padding-bottom: 4rem;
  }

  p {
    font-size: 2rem;
  }
`
const Prices = styled.div`
  margin-top: 3.3rem;

  span:first-child {
    color: ${props => props.theme.colors.SECONDARY_DEFAULT};
    font-size: 3.2rem;
    margin-right: 1.7rem;
  }

  span:last-child {
    font-size: 3.2rem;
    text-decoration: line-through;
  }
`
