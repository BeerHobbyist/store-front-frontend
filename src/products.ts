import { reactive } from 'vue';

type Product = {
    id: string;
    name: string;
    packageType: string;
    price: number;
}

function isProduct(item: any): item is Product {
    return (
        item &&
        'id' in item && typeof item.id === 'string' &&
        'name' in item && typeof item.name === 'string' &&
        'packageType' in item && typeof item.packageType === 'string' &&
        'price' in item && typeof item.price === 'number'
    );
}

export const productsStore = reactive({
    products: [] as Product[],
    fetchProducts: async () => {
        try {
            const response = await fetch('http://127.0.0.1:5001/belex-storefront/us-central1/getProducts');
            const data: any[] = await response.json();
            data.forEach((item: any) => {
                if (isProduct(item)) {
                    productsStore.products.push(item);
                } else {
                    console.error('Fetched item does not match the Product type:', item);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
});
