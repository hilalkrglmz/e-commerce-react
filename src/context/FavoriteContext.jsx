import { createContext, useState } from "react";

export const FavoriteContext =createContext();

export function FavoriteProvider ({children}) {

    const [favorite, setFavorite] = useState([]);


const addToFavorite = (product) => {
    const found = favorite.find((item) => item.id === product.id);
  
    if (found) {
      // Ürün favorilerde zaten varsa uyarı göster
      alert("Bu ürün favorilerde");
    } else {
      // Ürün favorilerde yoksa favorilere ekle
      setFavorite([...favorite, product]);
    }
  };


const removeFromFavorite = (delete_id) => {
  const filtered = favorite.filter((item) => item.id !== delete_id);
  setFavorite(filtered);
};

    

    return (
        <FavoriteContext.Provider value={{favorite, addToFavorite, removeFromFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}