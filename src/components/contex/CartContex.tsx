import { createContext, useContext, useState } from "react";


export const CartContext = createContext<any>(null);

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<number>(2);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
            </CartContext.Provider>
    )

    
}