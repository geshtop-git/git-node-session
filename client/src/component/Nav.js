import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products/add">Add Product</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}

export default Nav