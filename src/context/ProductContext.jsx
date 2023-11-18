import axios from "axios";
import { createContext, useEffect, useState } from "react";


//!Context yapısı temelini oluşturma
export const ProductContext = createContext()

//!Sağlayıcı ve onun tuttuğu verileri tanımlama
export function ProductProvider ({children}) {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory]= useState(null)
   
   
    useEffect(() => {
        axios
        .get(`https://fakestoreapi.com/products${selectedCategory ? '/category/' + selectedCategory : ''}`)
        .then((res) => setProducts(res.data))
    }, [selectedCategory])

    return(
        <ProductContext.Provider 
        value={{products, setSelectedCategory} }>
            {children}
        </ProductContext.Provider>
    )
}

