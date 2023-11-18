import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'
import Favorite from './pages/Favorite'

function App() {

  return (
    <>
<BrowserRouter>

<Header/>

<Routes>

<Route path='/' element= {<MainPage/>}/>
<Route path='/checkout' element= {<Checkout/>}/>
<Route path="/:id" element={<ProductDetail/>} />
<Route path='/favorite' element= {<Favorite/>}/>
</Routes>
</BrowserRouter>


    </>
  )
}

export default App
