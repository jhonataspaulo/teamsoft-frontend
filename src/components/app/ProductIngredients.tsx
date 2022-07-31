import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { ItemsType, ListIngredients, ProductCart } from '../../@types/Product'
import { useCart } from '../../hooks/useCart'
import { formatCurrencyToBr } from '../../utils/FormatCurrencyToBr'
import { Check } from '../Check'
import { MinusIcon, PlusIcon } from '../Icons'
import { ProductItem } from './ProductItem'

export const ProductIngredients: React.FC<{}> = (): JSX.Element => {
  const {
    items,
    amount,
    setAmount,
    product,
    cart,
    setCart,
    resetAmount,
    limit,
  } = useCart()
  const [checkedValue, setCheckedValue] = useState(false)

  const [listIngredients, setListIngredients] = useState<ListIngredients[]>([])
  const [productQuantity, setProductQuantity] = useState(1)
  const [limitItems, setLimitItems] = useState(0)

  const theme = useTheme()

  const addItem = (item: ItemsType) => {
    if (limitItems === limit) {
      alert(`número máximo de ítens é: ${limit}`)
    } else {
      if (!listIngredients) {
        const newList: ListIngredients = {
          item,
          quantity: 1,
        }
        setAmount(amount + item.vl_item)
        setLimitItems(limitItems + 1)
        setListIngredients([newList])
      } else {
        const newList = [...listIngredients]
        const idx = listIngredients.map(i => i.item.id).indexOf(item.id)
        if (idx > -1) {
          newList[idx].quantity += 1
          setAmount(amount + item.vl_item)
          setLimitItems(limitItems + 1)
          setListIngredients(newList)
        } else {
          newList.push({
            item,
            quantity: 1,
          })
          setAmount(amount + item.vl_item)
          setLimitItems(limitItems + 1)
          setListIngredients(newList)
        }
      }
    }
  }

  const removeItem = (item: ItemsType) => {
    if (listIngredients) {
      const newList = [...listIngredients]
      const idx = listIngredients.map(i => i.item.id).indexOf(item.id)
      if (idx > -1) {
        if (newList[idx].quantity > 1) {
          newList[idx].quantity -= 1
          setAmount(amount - item.vl_item)
          if (limitItems > 0) {
            setLimitItems(limitItems - 1)
          }
          setListIngredients(newList)
        } else {
          const list = newList.filter(i => i.item.id !== item.id)
          setAmount(amount - item.vl_item)
          if (limitItems > 0) {
            setLimitItems(limitItems - 1)
          }
          setListIngredients(list)
        }
      }
    }
  }

  const getQuantity = (id: number): number => {
    if (listIngredients) {
      const item = listIngredients.filter(i => i.item.id === id)[0]
      if (item) return item.quantity
    }
    return 0
  }

  const addProduct = () => {
    setProductQuantity(productQuantity + 1)
    setAmount(amount + product.vl_discount)
  }

  const removeProduct = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
      setAmount(amount - product.vl_discount)
    }
  }

  const addToCart = () => {
    const newProductCart: ProductCart = {
      items: listIngredients,
      product: {
        name: product.nm_product,
        qtd: productQuantity,
      },
    }

    if (cart) {
      let newCart = [...cart]
      newCart.push(newProductCart)
      setCart(newCart)
      setListIngredients([])
      setProductQuantity(1)
      setLimitItems(0)
      resetAmount()
    } else {
      setCart([newProductCart])
      setListIngredients([])
      setProductQuantity(1)
      setLimitItems(0)
      resetAmount()
    }
  }

  return (
    <Wrapper>
      <WrapperIngredients>
        <List>
          <HeaderList>
            <span>Adicionar ingredientes</span>
            <span>Até 8 ingredientes</span>
          </HeaderList>
          <ProductList>
            {items &&
              items.map(item => (
                <ProductItem
                  key={item.id}
                  title={item.nm_item}
                  price={item.vl_item}
                  onMinus={() => removeItem(item)}
                  onPlus={() => addItem(item)}
                  qtd={getQuantity(item.id)}
                  color={
                    getQuantity(item.id) > 0
                      ? theme.colors.RED_DELIVERIZE
                      : theme.colors.GRAY_LIGHT
                  }
                />
              ))}
            <Cutlery>
              <HeaderCutlety>
                <span>Precisa de talher?</span>
              </HeaderCutlety>
              <OptionQuestion onClick={() => setCheckedValue(true)}>
                <span>Sim</span>
                <Check checked={checkedValue} />
              </OptionQuestion>
              <OptionQuestion onClick={() => setCheckedValue(false)}>
                <span>Não</span>
                <Check checked={!checkedValue} />
              </OptionQuestion>
            </Cutlery>
          </ProductList>
        </List>
        <Actions>
          <Total>
            <span>Total</span>
            <span>{formatCurrencyToBr(amount)}</span>
          </Total>
          <Buttons>
            <Count>
              <MinusIcon
                onClick={removeProduct}
                color={
                  productQuantity === 1
                    ? theme.colors.GRAY_LIGHT
                    : theme.colors.RED_DELIVERIZE
                }
              />
              <span>{productQuantity}</span>
              <PlusIcon
                onClick={addProduct}
                color={theme.colors.RED_DELIVERIZE}
              />
            </Count>
            <button onClick={addToCart}>Adicionar</button>
          </Buttons>
        </Actions>
      </WrapperIngredients>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2.4rem;
  overflow: hidden;
`

const WrapperIngredients = styled.div`
  height: 100%;
  max-width: max(43.9rem, 100%);
  margin: 0 auto;
  border: 0.1rem solid ${props => props.theme.colors.GRAY_DARK};
  border-radius: 0.8rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    border: none;
    padding: 0;
  }
`
const List = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 0.8rem;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.SECONDARY_DEFAULT};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #${props => props.theme.colors.YELLOW_DARK};
  }

  @media (max-width: 576px) {
    padding-right: 0;
  }
`
const Actions = styled.div`
  padding: 0.8rem 0;
`

const HeaderList = styled.div`
  background-color: ${props => props.theme.colors.YELLOW_LIGHT};
  padding: 0.8rem 1.6rem;

  span {
    display: block;

    :first-child {
      font-weight: 500;
      font-size: 1.4rem;
    }

    :last-child {
      font-size: 1.2rem;
      color: ${props => props.theme.colors.YELLOW_DARK};
      margin-top: 0.8rem;
    }
  }
`

const ProductList = styled.div`
  @media (max-width: 576px) {
    width: 100%;
  }
`

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;

  span:first-child {
    font-size: 1.4rem;
  }

  span:last-child {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${props => props.theme.colors.YELLOW_DARK};
  }
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.6rem;

  > button {
    border: none;
    background-color: ${props => props.theme.colors.SECONDARY_DEFAULT};
    color: #fff;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;

    :hover {
      background-color: ${props => props.theme.colors.SECONDARY_LIGHT};
    }
  }
`

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

const Cutlery = styled.div`
  padding: 0.8rem 0;
`

const HeaderCutlety = styled.div`
  background-color: ${props => props.theme.colors.YELLOW_LIGHT};
  padding: 0.8rem 1.6rem;
  margin-top: 0.8rem;

  span {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    padding-bottom: 1.6rem;
  }
`

const OptionQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
`
