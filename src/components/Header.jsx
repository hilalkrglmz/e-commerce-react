import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { BasketContext } from '../context/BasketContext'
import { FavoriteContext } from '../context/FavoriteContext'


const Header = () => {

  const {setSelectedCategory} =useContext(ProductContext)
  const { basket }= useContext(BasketContext)
  const { favorite}= useContext(FavoriteContext)


  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => setCategories(res.data))
  }, [])

  const totalProduct = basket.reduce ((total,i) => total + i.amount,0)
  
  const totalFavori = favorite.reduce ((total,i) => total + 1,0)
  

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">E-Commerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-success" id="offcanvasNavbarLabel">Context Store</h5>
            <button type="button" className="bg-success btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Anasayfa</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorite">
                  <span>Favoriler</span>
                  <span className='badge bg-success mx-2'>{totalFavori}</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">
                  <span>CheckOut</span>
                  <span className='badge bg-success mx-2'>{totalProduct}</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu bg-dark text-light">
                <li onClick={() => setSelectedCategory(null)}>
                      <button className='dropdown-item text-success pointer-cursor'>HEPSİ</button></li>
                  {categories.map((category) => (
                    <li  onClick={() => setSelectedCategory(category)}>
                      <button className=' dropdown-item text-success pointer-cursor'>{category}</button></li>
                  ))}

                </ul>  
             


                </li>
            </ul> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
