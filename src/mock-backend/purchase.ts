import { Item, UserAndItemState } from "./types";
import { sleep } from "./utils";

export const ERRORS = {
  NOTFOUND: "NOTFOUND",
  INSUFFICIENTBALANCE: "INSUFFICIENTBALANCE",
  NOINVENTORY: "NOINVENTORY",
};

/**
 * Modifies `state`, given an `itemId` to purchase
 * @returns {UserAndItemState} the updated state if a purchase should succeed
 */
export const executePurchase = async (
  itemId: Item["id"],
  state: UserAndItemState
): Promise<UserAndItemState> => {
  await sleep(1000);

  const { balance, items } = state;
  const item = items.find((item) => item.id === itemId);

  if (!item) {
    throw new Error(ERRORS.NOTFOUND);
  }

  if (!item.inventory) {
    throw new Error(ERRORS.NOINVENTORY);
  }

  if (item.price > balance) {
    throw new Error(ERRORS.INSUFFICIENTBALANCE);
  }

  const itemIndex = items.findIndex((item) => item.id === itemId);
  return {
    balance: balance - item.price,
    items: [
      ...items.slice(0, itemIndex),
      {
        ...items[itemIndex],
        inventory: items[itemIndex].inventory - 1,
      },
      ...items.slice(itemIndex + 1),
    ],
  };
};
