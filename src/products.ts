import { computed, reactive } from 'vue';

export type Product = {
    id: string;
    name: string;
    packageType: string;
    price: number;
    imageUrl: string;
    category: string;
}

type ProductCategory = {
    name: string;
    products: Product[];
}

function isProduct(item: any): item is Product {
    return (
        item &&
        'id' in item && typeof item.id === 'string' &&
        'name' in item && typeof item.name === 'string' &&
        'packageType' in item && typeof item.packageType === 'string' &&
        'price' in item && typeof item.price === 'number' &&
        'imageUrl' in item && typeof item.imageUrl === 'string' &&
        'category' in item && typeof item.category === 'string'
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
    },
    populateCategories: () => {
        const categories = productsStore.products.reduce((accumulator, product) => {
            const category = accumulator.find(category => category.name === product.category);
            if (category) {
                category.products.push(product);
            } else {
                accumulator.push({
                    name: product.category,
                    products: [product]
                });
            }
            return accumulator;
        }, [] as ProductCategory[]);
        categoriesStore.categories = categories;
    }
});

export const categoriesStore = reactive({
    categories: [] as ProductCategory[]
});
