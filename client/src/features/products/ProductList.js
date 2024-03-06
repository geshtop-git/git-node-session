
import {useSelector, useDispatch} from "react-redux"
import {useGetProductsQuery} from "./productApiSlice"
import { useAddBasketMutation } from "../basket/basketApiSlice"

const ProductList = () => {
  const {data: products, isSuccess} = useGetProductsQuery()
  const [addToBasketEvent, {data}] = useAddBasketMutation()
    console.log("render product list")

    const addToBasket = (product) =>{
      addToBasketEvent({product:product._id})

    }
    const mapProduct = () =>{
      return   products.map(product =><div> {product._id} : {product.title} <button onClick={()=>addToBasket(product)}>Add To Basket</button> </div>)
    }
    if(!products?.length) return <h1>No data</h1>
  return (
    <div className="products-list">
        {mapProduct()}
    </div>
  )
}

export default ProductList