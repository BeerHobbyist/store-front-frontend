import { reactive } from 'vue';

type CartItem = {
    id: string;
    count: number;
}

export const cartStore = reactive({
    cartItems: [] as CartItem[],
    addToCart: (id: string, amount: number) => {
        const cartItem = cartStore.cartItems.find(item => item.id === id);
        if (cartItem) {
            cartItem.count += amount;
        } else {
            cartStore.cartItems.push({ id, count: amount });
        }
        console.log(cartStore.cartItems);
    },
    clearCart: () => {
        cartStore.cartItems = [];
    },
    updateAmount: (id: string, amount: number) => {
        const cartItem = cartStore.cartItems.find(item => item.id === id);
        if (cartItem) {
            cartItem.count = amount;
        }
        else {
            console.error('Item not found in cart');
        }
    }
});