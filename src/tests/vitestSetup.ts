import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse, RequestHandler } from "msw";
import { after } from "node:test";

const products = [
  {
    id: "1",
    name: "Product 1",
    packageType: "Package 1",
    price: 1,
    imageUrl: "http://example.com/image1.jpg",
    category: "Category 1",
    disabled: false,
  },
  {
    id: "2",
    name: "Product 2",
    packageType: "Package 2",
    price: 2,
    imageUrl: "http://example.com/image2.jpg",
    category: "Category 2",
    disabled: false,
  },
  {
    id: "1",
    name: "Product 1",
    packageType: "Package 1",
    price: 1,
    imageUrl: "http://example.com/image1.jpg",
    category: "Category 3",
    disabled: false,
  },
  {
    id: "3",
    name: "Product 3",
    packageType: "Package 3",
    price: 3,
    imageUrl: "http://example.com/image3.jpg",
    category: "Category 1",
    disabled: false,
  },
  {
    id: "4",
    name: "Product 4",
    packageType: "Package 4", // Wrong type for testing purposes
  },
];

const orders = [
  {
    orderTime: {
      _seconds: 1610000000,
      _nanoseconds: 0,
    },
    nip: 1234567890,
    phone: "5551234567",
    companyName: "Test Company Alpha",
    productsOrdered: [
      {
        count: 2,
        product: {
          id: "Prod1",
          name: "Chocolate Bar",
          packageType: "24 szt. x 6",
          price: 15.75,
          imageUrl: "https://example.com/image1.jpg",
          disabled: false,
          category: "Sweets",
        },
      },
      {
        count: 3,
        product: {
          id: "Prod2",
          name: "Gummy Bears",
          packageType: "10 szt. x 5",
          price: 5.99,
          imageUrl: "https://example.com/image2.jpg",
          disabled: false,
          category: "Sweets",
        },
      },
    ],
    email: "contact@testcompanyalpha.com",
    remarks: "Please handle with care",
    id: "Order1",
  },
  {
    orderTime: {
      _seconds: 1620000000,
      _nanoseconds: 0,
    },
    nip: 9876543210,
    phone: "5557654321",
    companyName: "Test Company Beta",
    productsOrdered: [
      {
        count: 1,
        product: {
          id: "Prod3",
          name: "Mint Gum",
          packageType: "100 szt. x 1",
          price: 1.25,
          imageUrl: "https://example.com/image3.jpg",
          disabled: false,
          category: "Gum",
        },
      },
      {
        count: 5,
        product: {
          id: "Prod4",
          name: "Sugar Free Gum",
          packageType: "50 szt. x 2",
          price: 2.0,
          imageUrl: "https://example.com/image4.jpg",
          disabled: true,
          category: "Gum",
        },
      },
    ],
    email: "support@testcompanybeta.com",
    remarks: "Fast delivery requested",
    id: "Order2",
  },
];

export const restHandlers: RequestHandler[] = [
  http.get(
    "http://127.0.0.1:5001/belex-storefront/us-central1/api/products",
    () => {
      return HttpResponse.json(products);
    }
  ),
  http.get(
    "http://127.0.0.1:5001/belex-storefront/us-central1/api/orders",
    () => {
      return HttpResponse.json(orders);
    }
  ),
];

export const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
