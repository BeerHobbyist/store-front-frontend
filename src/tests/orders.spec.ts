import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { ordersStore } from "@/orders";

describe("ordersStore", () => {
  beforeEach(() => {
    ordersStore.orders = [];
    ordersStore.isLoaded = false;
  });

  it("should fetch orders", async () => {
    await ordersStore.fetchOrders();
    expect(ordersStore.orders).toHaveLength(2);
    expect(ordersStore.isLoaded).toBe(true);
    expect(ordersStore.orders[0].id).toEqual("Order1");
  });
});
