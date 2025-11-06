import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    image: string;
}

interface CartState {
    itemList: CartItem[];
    totalQuantity: number;
    totalAmount: number;
    showCart: boolean;
}

const initialState: CartState = {
    itemList: [],
    totalQuantity: 0,
    totalAmount: 0,
    showCart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.price * existingItem.quantity;
            } else {
                state.itemList.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
            state.totalQuantity++;
            state.totalAmount = state.itemList.reduce(
                (sum, item) => sum + item.totalPrice,
                0
            );
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItemIndex = state.itemList.findIndex(
                (item) => item.id === id
            );

            if (existingItemIndex !== -1) {
                const item = state.itemList[existingItemIndex];
                state.totalQuantity -= item.quantity;
                state.itemList.splice(existingItemIndex, 1);
                state.totalAmount = state.itemList.reduce(
                    (sum, item) => sum + item.totalPrice,
                    0
                );
            }
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const item = state.itemList.find((item) => item.id === id);

            if (item) {
                item.quantity++;
                item.totalPrice = item.price * item.quantity;
                state.totalQuantity++;
                state.totalAmount = state.itemList.reduce(
                    (sum, item) => sum + item.totalPrice,
                    0
                );
            }
        },

        decreaseQuantity(state, action: PayloadAction<string>) {
            const id = action.payload;
            const item = state.itemList.find((item) => item.id === id);
            if (item) {
                if (item.quantity === 1) {
                    state.itemList = state.itemList.filter((i) => i.id !== id);
                    state.totalQuantity--;
                } else {
                    item.quantity--;
                    item.totalPrice = item.price * item.quantity;
                    state.totalQuantity--;
                }
                state.totalAmount = state.itemList.reduce(
                    (sum, item) => sum + item.totalPrice,
                    0
                );
            }
        },
        clearCart(state) {
            state.itemList = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setShowCart,
} = cartSlice.actions;
export default cartSlice.reducer;
