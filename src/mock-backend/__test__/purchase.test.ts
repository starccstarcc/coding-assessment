import { executePurchase, ERRORS } from "../purchase";
import { initialBalance, initialItems } from "../data";

describe("purchase", () => {
  const testData = {
    items: initialItems,
    balance: initialBalance,
  };

  it("Buy functionality, Buy item successfully done!", async () => {
    await expect(executePurchase(1, testData)).resolves.not.toThrow();
  });   

  it("Buy functionality, throw INSUFFICIENT error.", async () => {
    await expect(executePurchase(2, testData)).rejects.toThrow(
      ERRORS.INSUFFICIENTBALANCE
    );
  });

  it("Buy functionality, throw NOINVENTORY error.", async () => {
    const newData = await executePurchase(3, testData);
    await expect(executePurchase(3, newData)).rejects.toThrow(
      ERRORS.NOINVENTORY
    );
  });

  it("Buy functionality, throw NOTFOUND error.", async () => {
    await expect(executePurchase(5, testData)).rejects.toThrow(ERRORS.NOTFOUND);
  });
});
