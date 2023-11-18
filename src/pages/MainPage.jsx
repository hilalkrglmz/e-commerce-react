import loading from "../components/loading.gif"
import Card from "../components/Card"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"



const MainPage = () => {
const {products} =useContext(ProductContext)

    return (
        <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 ">
            {!products && (<div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh' }}>
                <img style={{ maxWidth: '50%', maxHeight: '50%', borderRadius: '50%' }} className="img-fluid " src={loading} alt="Yükleniyor..." />
            </div>)}

            {products?.map((product) =>
                (<Card key={product.id} product={product} />)
            )
            }
        </div>
    )
}

export default MainPage;