import { reactive } from 'vue'

export type OrderedProduct = {
    count: number;
    product: {
        id: string;
        name: string;
        price: number;
        category: string;
        packageType: string;
        imageUrl: string;
    };
};

type Order = {
    nip: number;
    phone: string;
    companyName: string;
    email: string;
    id: string;
    remarks: string;
    orderTime: Date;
    productsOrdered: OrderedProduct[];
};

export const ordersStore = reactive({
    isLoaded: false,
    orders: [] as Order[],
    fetchOrders: async () => {
        try {
            const response = await fetch('http://127.0.0.1:5001/belex-storefront/us-central1/api/orders');
            const data: any[] = await response.json();
            data.forEach((item: any) => {
                ordersStore.orders.push({
                    nip: item.nip,
                    phone: item.phone,
                    companyName: item.companyName,
                    email: item.email,
                    id: item.id,
                    remarks: item.remarks,
                    orderTime: new Date(item.orderTime._seconds * 1000 + item.orderTime._nanoseconds / 1000000),
                    productsOrdered: item.productsOrdered,
                });
            });
            ordersStore.isLoaded = true;
        } catch (error) {
            console.error(error);
        }
    }
});