import { createContext, useState } from "react";

export const FavoriteContext =createContext();

export function FavoriteProvider ({children}) {

    const [favorite, setFavorite] = useState ([]);

    const addToFavorite = (product) => {

        const found = favorite.find((i) => i.id ===product.id);

        if(found) {
            
            //*tıklanan eleman sepette varsa miktarını +1
            const updated={...found, amount: found.amount + 1}
            

            const newFavorite= favorite.map((item) => item.id===updated.id ? updated : item)
            
            
            //*state i güncelle
            setFavorite(newFavorite)

        }

        //*tıklanan eleman sepette yoksa spete ekle ve miktar bilgisini 1 yap.
        else{
            
            setFavorite([...favorite, {...product, amount: 1}])

        }


    };

    const removeFromFavorite = (delete_id) => {

        //!Silmek istediğin ürünü sepette bul

        const found = favorite.find((i) => i.id === delete_id);

        if(found){
            const updated = {...found, amount: Math.max(0, found.amount - 1)}
            const newFavorite = favorite.map((item) => item.id ===updated.id ? updated : item)
            setBasket(newFavorite)

        } else{
            const filtered = favorite.filter((i) => i.id !== delete_id);
            setFavorite(filtered)
            
        }



    };

    return (
        <FavoriteContext.Provider value={{favorite, addToFavorite, removeFromFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}