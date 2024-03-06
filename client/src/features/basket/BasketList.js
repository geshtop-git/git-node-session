import { useGetBasketsQuery, useDeleteBasketMutation } from "./basketApiSlice"


const BasketList = () => {
    const {data: basket}= useGetBasketsQuery()
    const [del,{}] = useDeleteBasketMutation()
console.log("render basket")
if(!basket?.length) return  <div className="basket-list">No items</div>

  return (
    <div className="basket-list">{
        basket.map(basketItem=><div className="basket-item">{basketItem.product.title} <span className="cnt">-{basketItem.quantity}-</span> <button onClick={()=>{del({id: basketItem._id})}}>X</button> </div> )
        }</div>
  )
}

export default BasketList