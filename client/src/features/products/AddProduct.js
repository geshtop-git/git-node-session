import { useRef } from "react"
import {useDispatch} from "react-redux"

const AddProduct = () => {
    const productNameRef = useRef()
    const dispatch = useDispatch()
    const onSubmitForm = (e) =>{
        e.preventDefault()
        const product = {
            name: productNameRef.current.value
        }
        //console.log(dispatch(addProduct(product)))
    }
  return (
    <form>
        <input ref={productNameRef} placeholder="Product name"  />
        <button onClick={onSubmitForm}>Add Product</button>
    </form>
  )
}

export default AddProduct