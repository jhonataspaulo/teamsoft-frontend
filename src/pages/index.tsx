import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Header } from '../components/app/Header'
import { ProductInfo } from '../components/app/ProductInfo'
import { ProductIngredients } from '../components/app/ProductIngredients'

const Product: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Deliverize</title>
      </Head>
      <Header />
      <ProductSection>
        <ProductInfo />
        <ProductIngredients />
      </ProductSection>
    </div>
  )
}

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  height: calc(100vh - 8rem);
  width: min(1280px, 100%);
  min-width: 375px;
  margin: 0 auto;
  justify-content: center;
  padding: 0 6rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, max(437px, 50%));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, max(320px, 25%));
    padding: 0 1.6rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 0;
    height: auto;
  }
`

export default Product
