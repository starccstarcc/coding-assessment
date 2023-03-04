import { Goods } from '../../types';

type StoreCardProps = {
  goods: Goods;
  handleBuy: (id: number) => void;
};

export const StoreCard = (props: StoreCardProps) => {
  const {
    goods: { id, name, price, inventory },
    handleBuy,
  } = props;

  return (
    <div className="rounded divide-y border">
      <div className="flex w-full justify-center h-32 items-center text-5xl">
        {name[0].toUpperCase()}
      </div>
      <div className="gap-3 p-3">
        <div className="text-xl">{name}</div>
        <div className="text-md font-bold">${price}</div>
        <div>Quantity: {inventory}</div>
        <button
          className="flex h-10 px-5 w-full justify-center items-center bg-teal-500 hover:bg-teal-600 text-white font-bold rounded"
          onClick={() => handleBuy(id)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
