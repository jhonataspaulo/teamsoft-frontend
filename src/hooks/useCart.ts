import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
  const cart = useContext(CartContext)
  return cart
}
