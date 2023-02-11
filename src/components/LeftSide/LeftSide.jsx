import React from "react";
import Investment from "./Investment";
import { InvestDB } from "./utils/InvestmentDB";

function LeftSide() {
  return (
    <div className="col-span-2 min-h-[90vh] border-r border-gray-200 item-start justify-start flex flex-col w-full text-gray-900">
      {/* Card Section */}
      <div className="w-full items-start justify-start flex flex-col px-7 pt-12 pb-6">
        <h1 className="font-bold text-3xl xl:text-4xl pb-2"> Overview </h1>
        <div className="w-[23rem] shadow-xl p-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg">
          <img
            src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"
            width="55"
            alt="CardChipicon"
          />

          <div className="flex pt-4">
            <div className="flex flex-col items-center text-gray-200  font-bold">
              <span className="text-2xl">**** **** **** **** 2345</span>
              <span className="text-xl">09/10</span>
            </div>
          </div>
          <h1 className="text-xm text-gray-300 font-bold">Cardholder Name</h1>
        </div>
      </div>
      {/* Transactions section */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-10">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 ">
         Transactions
        </h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide">
          {InvestDB.map((item) => (
            <Investment item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
