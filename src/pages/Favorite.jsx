import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

const Favorite = () => {

const {favorite, addToFavorite, removeFromFavorite} = useContext(FavoriteContext)
const totalFavori = favorite.reduce((total, item) => total + 1, 0);
  return (
    <div className="container">
      <div className="d-flex flex-column gap-5 p-2">
        {favorite.length === 0 && <p className="text-center my-5"><span>Sepet boş :( Lütfen sepete bir ürün ekleyiniz. Tıklayınız: </span> <Link className="text-success" to="/">ÜRÜNLER</Link></p> }
        {favorite.map((product) => (
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div  className="d-flex flex-column  justify-content-center align-items-center bg-light rounded-lg">
            <img style={{width:'100px', height:'100px'}} className="object-fit-contain shadow rounded" src={product.image} alt="" />
            <Link to={`/${product.id}`} style={{fontSize:'15px'}} className='mt-1 btn btn-success'>Detaylı İncele</Link>
            </div>
            <h4 className="text-truncate">{product.title}</h4>
            <h5 className="text-success">${product.price}</h5>
            <div className="d-flex gap-3">
              <button onClick={() => removeFromFavorite(product.id)} className="btn btn-danger">-</button>
            </div>
          </div>
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-5">
        <p>Favori Ürün Sayısı: {totalFavori}</p>
        <button style={{fontSize:'15px', border:'none'}} className="mt-3 bg-success">Toplu Ödeme Seçeneği</button>

      </div>
    </div>
  )
}

export default Favorite;