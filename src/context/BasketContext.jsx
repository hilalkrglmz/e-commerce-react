import { createContext, useState } from "react";

export const BasketContext =createContext();

export function BasketProvider ({children}) {

    const [basket, setBasket] = useState ([]);

    const addToBasket = (product) => {

        const found = basket.find((i) => i.id ===product.id);

        if(found) {
            
            //*tıklanan eleman sepette varsa miktarını +1
            const updated={...found, amount: found.amount + 1}
            

            const newBasket= basket.map((item) => item.id===updated.id ? updated : item)
            
            
            //*state i güncelle
            setBasket(newBasket)

        }

        //*tıklanan eleman sepette yoksa spete ekle ve miktar bilgisini 1 yap.
        else{
            
            setBasket([...basket, {...product, amount: 1}])

        }


    };

    const removeFromBasket = (delete_id) => {

        //!Silmek istediğin ürünü sepette bul

        const found = basket.find((i) => i.id === delete_id);

        if(found){
            const updated = {...found, amount: Math.max(0, found.amount - 1)}
            const newBasket = basket.map((item) => item.id ===updated.id ? updated : item)
            setBasket(newBasket)

        } else{
            const filtered = basket.filter((i) => i.id !== delete_id);
            setBasket(filtered)
            
        }



    };

    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )
}