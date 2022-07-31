import { createContext, useEffect, useState } from 'react'

type CartContextType = {
  ingredients: IIngredient[]
  setIngredients: (products: IIngredient[]) => void
  cart: ICartProducts[] | null
  products: IProduct[]
  currentProduct: IProduct
  addIntgredientToList: (ingredient: IIngredient) => void
  getIngredientQuantity: (id: number) => number
  removeIntgredientFromList: (ingredient: IIngredient) => void
  addProductToList: () => void
  removeProductFromList: () => void
  currentList: ICartProducts | null
  amount: number
  addToCart: () => void
  newCartNotification: boolean
}

export const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: React.ReactNode
}

export type IIngredientList = {
  ingredient: IIngredient
  quantity: number
}

export type IProductList = {
  product: IProduct
  quantity: number
}

export type IIngredient = {
  id: number
  title: string
  price: number
}

export type IProduct = {
  id: number
  title: string
  price: number
  priceOffer: number
  description: string
}

export type ICartProducts = {
  productList: IProductList
  ingredientsList: IIngredientList[]
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ICartProducts[] | null>(null)
  const [ingredients, setIngredients] = useState<IIngredient[]>([
    { id: 1, title: 'Queijo Cheddar', price: 4.99 },
    { id: 2, title: 'Cebola crispy', price: 1.5 },
    { id: 3, title: 'Molho cheddar', price: 3.5 },
    { id: 4, title: 'Molho de picanha', price: 3.5 },
  ])
  const [products, setProducts] = useState<IProduct[]>([])
  const [currentProduct, setCurrentProduct] = useState<IProduct>({
    id: 1,
    title: 'Oferta Picanha Cheddar Bacon',
    description:
      'Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim',
    price: 34.99,
    priceOffer: 31.99,
  })
  const [currentList, setCurrentList] = useState<ICartProducts | null>(null)
  const [amount, setAmount] = useState(0)
  const [newCartNotification, setNewCartNotification] = useState(false)

  const addToCart = () => {
    if (currentList) {
      if (!cart) {
        setCart([currentList])
        setCurrentList({
          ingredientsList: [],
          productList: { product: currentProduct, quantity: 1 },
        })
        setAmount(currentProduct.priceOffer)
        setNewCartNotification(true)
        setTimeout(() => {
          setNewCartNotification(false)
        }, 3000)
      } else {
        setCart([...cart, currentList])
        setCurrentList({
          ingredientsList: [],
          productList: { product: currentProduct, quantity: 1 },
        })
        setAmount(currentProduct.priceOffer)
        setNewCartNotification(true)
        setTimeout(() => {
          setNewCartNotification(false)
        }, 3000)
      }
    }
  }

  const addProductToList = () => {
    if (!currentList) {
      const newList: ICartProducts = {
        ingredientsList: [],
        productList: {
          product: currentProduct,
          quantity: 1,
        },
      }
      setCurrentList(newList)
    } else {
      const newList = { ...currentList }
      newList.productList.quantity += 1
      setCurrentList(newList)
    }

    setAmount(getAmount())
  }

  const removeProductFromList = () => {
    if (currentList) {
      if (currentList.productList.quantity > 1) {
        const newList = { ...currentList }
        newList.productList.quantity -= 1
        setCurrentList(newList)
      }
    }

    setAmount(getAmount())
  }

  const addIntgredientToList = (ingredient: IIngredient): void => {
    if (!currentList) {
      const newList: ICartProducts = {
        ingredientsList: [
          {
            ingredient,
            quantity: 1,
          },
        ],
        productList: {
          product: currentProduct,
          quantity: 1,
        },
      }

      setCurrentList(newList)
    } else {
      const index = currentList.ingredientsList
        .map(item => item.ingredient.id)
        .indexOf(ingredient.id)

      const newList = { ...currentList }

      if (index > -1) {
        newList.ingredientsList[index].quantity += 1
        setCurrentList(newList)
      } else {
        newList.ingredientsList.push({ ingredient, quantity: 1 })
        setCurrentList(newList)
      }
    }

    setAmount(getAmount())
  }

  const removeIntgredientFromList = (ingredient: IIngredient): void => {
    if (currentList) {
      const index = currentList.ingredientsList
        .map(item => item.ingredient.id)
        .indexOf(ingredient.id)

      const newList = { ...currentList }

      if (index > -1) {
        if (newList.ingredientsList[index].quantity > 1) {
          newList.ingredientsList[index].quantity -= 1
          setCurrentList(newList)
        } else {
          newList.ingredientsList.splice(index, 1)
          setCurrentList(newList)
        }
      }
    }
    setAmount(getAmount())
  }

  const getIngredientQuantity = (id: number): number => {
    const ingredient = currentList?.ingredientsList.filter(
      item => item.ingredient.id === id
    )[0]
    return ingredient ? ingredient.quantity : 0
  }

  const getAmount = (): number => {
    if (currentList) {
      const amountProduct =
        currentList.productList.quantity * currentProduct.priceOffer

      let amountIngredients: number = 0

      currentList.ingredientsList.map(item => {
        amountIngredients += item.quantity * item.ingredient.price
      })

      return amountProduct + amountIngredients
    } else {
      return 0
    }
  }

  useEffect(() => {
    const newList: ICartProducts = {
      ingredientsList: [],
      productList: { product: currentProduct, quantity: 1 },
    }
    setCurrentList(newList)
    setAmount(currentProduct.priceOffer)
  }, [])

  return (
    <CartContext.Provider
      value={{
        ingredients,
        setIngredients,
        cart,
        products,
        currentProduct,
        addIntgredientToList,
        getIngredientQuantity,
        removeIntgredientFromList,
        addProductToList,
        removeProductFromList,
        currentList,
        amount,
        addToCart,
        newCartNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
