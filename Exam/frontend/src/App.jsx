import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Basket from './pages/Basket/Basket'
import Nopage from './pages/Nopage/Nopage'
import Detail from './pages/Detail/Detail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
