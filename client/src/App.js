import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import ProductList from './features/products/ProductList';
import AddProduct from './features/products/AddProduct';
import Layout from './component/Layout';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<h1> Home page </h1>} />
          <Route path='/products' element = {<ProductList />} />
          <Route path='/products/add' element = {<AddProduct />} />
         
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
