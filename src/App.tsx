import 'bulma-helpers/css/bulma-helpers.min.css';
import 'bulma/css/bulma.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='category' element={<Category />} />
          <Route path='product' element={<Product />} />
          <Route path='admin' element={<Admin />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}
// làm quỹ từ thiện
export default App
