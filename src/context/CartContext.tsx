import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {
  BasicProductType,
  ItemsType,
  ProductCart,
  ProductType,
} from '../@types/Product'

type CartContextType = {
  items: ItemsType[] | null
  product: BasicProductType
  amount: number
  loading: boolean
  setAmount: (value: number) => void
  cart: ProductCart[] | null
  setCart: (value: ProductCart[]) => void
  resetAmount: () => void
  newProduct: boolean
  limit: number
}

export const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<ItemsType[] | null>(null)
  const [product, setProduct] = useState<BasicProductType>(
    {} as BasicProductType
  )
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState<ProductCart[] | null>(null)
  const [newProduct, setNewProduct] = useState(false)
  const [limit, setLimit] = useState(0)

  const getData = async () => {
    setLoading(true)
    const URL =
      'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products'
    const { data } = await axios.get(URL)
    const product = data[0] as ProductType
    setItems(product.ingredients[0].itens)
    setProduct({
      id: product.id,
      nm_product: product.nm_product,
      description: product.description,
      vl_discount: product.vl_discount,
      vl_price: product.vl_price,
    })
    setAmount(product.vl_discount)
    setLimit(product.ingredients[0].max_itens)
    setLoading(false)
  }

  const resetAmount = () => {
    setAmount(product.vl_discount)
    setNewProduct(true)
    setTimeout(() => {
      setNewProduct(false)
    }, 3000)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        product,
        amount,
        loading,
        setAmount,
        cart,
        setCart,
        resetAmount,
        newProduct,
        limit,
      }}
    >
      {children}s
    </CartContext.Provider>
  )
}
