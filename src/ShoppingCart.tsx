import type { ReactElement } from "react";
import {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setShowCart,
} from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ShoppingCart = (): ReactElement => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(setShowCart());
    };
    const showCart = useSelector((state: RootState) => state.cart.showCart);
    const items = useSelector((state: RootState) => state.cart.itemList);

    interface CartItem {
        id: string;
        name: string;
        price: number;
        quantity: number;
        totalPrice: number;
    }

    const item: CartItem = {
        id: "abc123",
        name: "Sample Product",
        price: 20,
        quantity: 1,
        totalPrice: 20,
    };

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };

    return (
        <div>
            <div>
                <Header />
            </div>

            <button onClick={handleToggle}>toggle on/off</button>
            <div>
                {showCart && (
                    <div>
                        <h1>the cart items: </h1>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.name} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button onClick={handleAddToCart}>add to cart</button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};
