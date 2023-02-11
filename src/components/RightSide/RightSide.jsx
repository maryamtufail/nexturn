import React from "react";
import Chart from "./Chart";
import Total from "./Total";
import { InvestDB } from "../LeftSide/utils/InvestmentDB";
import Items from "./Items";

function RightSide() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6">
      {/* Top section */}
      <Total />
      {/* Chart */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl"> Potential </h1>
        <Chart />
      </div>
      {/* bottom part */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="text-xl font-bold xl:text-3xl py-4 "> My Portfolio </h1>
        <div className="flex items-center justify-center space-x-6 overflow-x-auto w-full py-4 ">
          {InvestDB.map((item) => (
            <Items item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSide;
