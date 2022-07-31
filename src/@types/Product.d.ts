export interface ProductType {
  id: string
  createdAt: string
  nm_product: string
  description: string
  vl_price: number
  vl_discount: number
  url_image: string
  ingredients: IngredientType[]
}

export interface BasicProductType {
  id: string
  nm_product: string
  description: string
  vl_price: number
  vl_discount: number
}

export interface IngredientType {
  group: string
  max_itens: number
  type: number
  itens: ItemsType[]
}

export interface ItemsType {
  id: number
  nm_item: string
  vl_item: number
}

type ListIngredients = {
  item: ItemsType
  quantity: number
}

export interface ProductCart {
  items: ListIngredients[]
  product: {
    name: string
    qtd: number
  }
}
