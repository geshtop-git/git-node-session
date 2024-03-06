import { Outlet } from "react-router-dom"
import BasketList from "../features/basket/BasketList"
import Nav from "./Nav"

const Layout = () => {
  return (
    <>
    <header>
        <Nav/>
        <div>Hello: </div>
        <BasketList />
    </header>
    <Outlet />
    </>
  
  )
}

export default Layout