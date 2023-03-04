export type Item = {
  /**
   * The db id of the item.
   */
  id: number;

  /**
   * In USD
   */
  price: number;

  /**
   * Display to the user
   */
  name: string;

  /**
   * amount remaining in inventory
   */
  inventory: number;
};

export type UserAndItemState = {
  balance: number;
  items: Item[];
};

export type UseCheckout = {
  items: Item[];
  balance: number;
  /**
   * Charges the current account with the `price` in USD and decrements an item's inventory
   *
   * @throws if the current account does not have enough or if no inventory
   *
   */
  buy: (itemId: Item["id"]) => Promise<void>;
};
