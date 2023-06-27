import { useState, useCallback } from "react";
import { initialBalance, initialItems } from "./data";
import { Item, UseCheckout, UserAndItemState } from "./types";
import { executePurchase } from "./purchase";

export const useCheckout = (): UseCheckout => {
  const [checkoutState, setCheckoutState] = useState<UserAndItemState>({
    items: initialItems,
    balance: initialBalance,
  });

  const callbackBuy = useCallback(
    async (itemId: Item["id"]) => {
      const updatedState = await executePurchase(itemId, checkoutState);
      setCheckoutState(updatedState);
    },
    [checkoutState]
  );

  return {
    buy: callbackBuy,
    ...checkoutState,
  };
};
