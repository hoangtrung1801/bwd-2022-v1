import 'bulma/css/bulma.css';
import './App.css'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}
// làm quỹ từ thiện
export default App
