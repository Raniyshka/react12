import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Catalog} from './pages/Catalog/Catalog'
import {Product} from './pages/Product/Product'
import {Users} from './pages/Users/Users'
import {Home} from './pages/Home/Home'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/catalog/:id' element={<Product/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </>
  )
}

export default App
