import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from "../components/loading.gif"
import { BasketContext } from '../context/BasketContext';



const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const {addToBasket} =useContext(BasketContext)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  console.log(product);

  return (
    <div>

{!product && (<div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh' }}>
                <img style={{ maxWidth: '50%', maxHeight: '50%', borderRadius: '50%' }} className="img-fluid " src={loading} alt="Yükleniyor..." />
            </div>)}

      {product ? (
        <div className="d-flex flex-column justify-content-between align-items-center gap-3">
        <div  className="  justify-content-center align-items-center bg-light rounded-lg">
        <img style={{width:'200px', height:'200px'}} className="object-fit-contain shadow rounded" src={product.image} alt="" />
        </div>
        <h4 className="text-truncate">{product.title}</h4>
        <p className='mx-5 text-center fs-6'>
            <span className='fs-3 text-underline fw-bold text-success'>Ürün Açıklaması:</span>
            <br/>
            {product.description}</p>
        <h5 className="text-success">${product.price}</h5>
        <button className="bg-success text-light" onClick={() => addToBasket(product)}>Sepete Ekle</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;