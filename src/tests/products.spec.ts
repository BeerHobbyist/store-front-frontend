import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { productsStore, categoriesStore } from "@/products";

describe("productsStore", () => {
  beforeEach(() => {
    productsStore.products = [];
    // Suppress console.error output during tests
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.error to its original state after each test
    vi.restoreAllMocks();
  });

  it("should fetch products and reject ill formated ones", async () => {
    await productsStore.fetchProducts();
    expect(productsStore.products).toHaveLength(4);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("should populate categories", async () => {
    await productsStore.fetchProducts();
    productsStore.populateCategories();
    expect(categoriesStore.categories).toHaveLength(3);
  });
});
