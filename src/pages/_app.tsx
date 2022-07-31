import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { CartProvider } from '../context/CartContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
