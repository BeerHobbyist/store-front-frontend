import { describe, it, expect, beforeEach, vi } from "vitest";
import { cartStore } from "@/cart";

describe("cartStore", () => {
  beforeEach(() => {
    cartStore.cartItems = [];
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should add items to the cart", () => {
    cartStore.addToCart("item1", 2);
    cartStore.addToCart("item1", 2);
    expect(cartStore.cartItems).toHaveLength(1);
    expect(cartStore.cartItems[0]).toEqual({ id: "item1", count: 4 });

    cartStore.addToCart("item2", 3);
    expect(cartStore.cartItems).toHaveLength(2);
    expect(cartStore.cartItems[1]).toEqual({ id: "item2", count: 3 });
  });

  it("should update the count of existing items in the cart", () => {
    cartStore.addToCart("item1", 2);
    cartStore.updateAmount("item1", 5);
    expect(cartStore.cartItems[0]).toEqual({ id: "item1", count: 5 });
  });

  it("should not update the count if item is not found in the cart", () => {
    cartStore.addToCart("item1", 2);
    cartStore.updateAmount("item2", 5);
    expect(console.error).toHaveBeenCalledWith("Item not found in cart");
    expect(cartStore.cartItems[0]).toEqual({ id: "item1", count: 2 });
  });

  it("should clear the cart", () => {
    cartStore.addToCart("item1", 2);
    cartStore.addToCart("item2", 3);
    cartStore.clearCart();
    expect(cartStore.cartItems).toHaveLength(0);
  });
});