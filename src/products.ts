import { reactive } from 'vue';

type Product = {
    id: number;
    productName: string;
    packagingType: string;
}


export const productsStore = reactive({
    products: [] as Product[],
    fetchProducts: async () => {
        try {
            const response = await fetch('http://localhost:5267/ProductModel');
            const data: Product[] = await response.json();
            data.forEach((product: Product) => {
                productsStore.products.push(product);
            });
        } catch (error) {
            console.error(error);
        }
    }
});
