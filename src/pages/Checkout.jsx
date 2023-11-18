import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Checkout = () => {

const {basket, addToBasket, removeFromBasket} = useContext(BasketContext)


const totalProduct = basket.reduce ((total,i) => total + i.amount,0)

const totalPrice = basket.reduce((total,i) => total + i.amount * i.price,0)


  return (
    <div className="container">
      <div className="d-flex flex-column gap-5 p-2">
        {basket.length === 0 && <p className="text-center my-5"><span>Sepet boş :( Lütfen sepete bir ürün ekleyiniz. Tıklayınız: </span> <Link className="text-success" to="/">ÜRÜNLER</Link></p> }
        {basket.map((product) => (
          <div className="d-flex justify-content-between align-items-center gap-3">
            <div  className="d-flex flex-column  justify-content-center align-items-center bg-light rounded-lg">
            <img style={{width:'100px', height:'100px'}} className="object-fit-contain shadow rounded" src={product.image} alt="" />
            <Link to={`/${product.id}`} style={{fontSize:'15px'}} className='mt-1 btn btn-success'>Detaylı İncele</Link>
            </div>
            <h4 className="text-truncate">{product.title}</h4>
            <h5 className="text-success">${product.price}</h5>
            <p className="text-sm text-nowrap">Miktar:{product.amount}</p>
            <div className="d-flex gap-3">
              <button onClick={() => removeFromBasket(product.id)} className="btn btn-danger">-</button>
              <button onClick={() => addToBasket(product)} className="btn btn-success d-flex align-items-center justify-content-center" style={{textAlign:'center'}}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-5">
        <p>Sepette Ürün Miktarı: {totalProduct}</p>
        <p><span className="text-success">Toplam tutar: $ {totalPrice.toFixed(2)}</span></p>
        <button style={{fontSize:'15px', border:'none'}} className="mt-3 bg-success">Ödemeye Geç</button>

      </div>
    </div>
  )
}

export default Checkout;