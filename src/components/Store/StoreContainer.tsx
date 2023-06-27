import { Goods } from "@/types";
import React from "react";
import { StoreOverlay, StoreCard } from "./index";

type StoreContainerProps = {
  goodsList: Goods[];
  loading: boolean;
  handleBuy: (id: number) => void;
};

export const StoreContainer = (props: StoreContainerProps) => {
  const { goodsList, loading, handleBuy } = props;

  return (
    <div className="grid grid-cols-2 sm:gird-cols-3 lg:grid-cols-4 gap-3 mt-3">
      <>
        {loading && <StoreOverlay />}
        {goodsList.map((goods, index) => (
          <StoreCard goods={goods} key={index} handleBuy={handleBuy} />
        ))}
      </>
    </div>
  );
};
