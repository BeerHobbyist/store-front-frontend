import { reactive } from 'vue';

type Product = {
    id: string;
    name: string;
    packageType: string;
    price: number;
}


export const productsStore = reactive({
    products: [] as Product[],
    fetchProducts: async () => {
        try {
            const response = await fetch('http://127.0.0.1:5001/belex-storefront/us-central1/getProducts');
            const data: Product[] = await response.json();
            data.forEach((product: Product) => {
                productsStore.products.push(product);
            });
        } catch (error) {
            console.error(error);
        }
    }
});
