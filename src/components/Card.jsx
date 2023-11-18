import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"
import { Link } from "react-router-dom"
import { FavoriteContext } from "../context/FavoriteContext"


const Card = ( {product}) => {
    const {addToBasket} = useContext(BasketContext)
    const {addToFavorite} = useContext(FavoriteContext)
  
    return (
    <div className="card py-2" style={{width:'250px'}}>
        <div className="d-flex justify-content-center" >
            <img className="object-fit-contain" height={120}  src={product.image} alt="" />
        </div>
        <div className="card-body d-flex flex-column gap-1">
            <h4 className="text-truncate">{product.title}</h4>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <Link to={`/${product.id}`} style={{fontSize:'15px'}} className='mt-1 btn btn-success'>Detaylı İncele</Link>
            <button style={{fontSize:'15px'}} className="hover bg-dark text-light" onClick={() => addToBasket(product)}>Sepete Ekle</button>
            <button style={{fontSize:'15px'}} className="bg-dark text-light" onClick={() => addToFavorite(product)}>Favorilere Ekle</button>

        </div>
    </div>
  )
}

export default Card