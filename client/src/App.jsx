import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceHolder from './Pages/placeHolder'

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeholder' element={<PlaceHolder />} />
      </Routes>
    </div>
  )
}

export default App
