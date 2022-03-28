import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "./Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 m-6 rounded-lg">
      <h2 className="text-4xl bg-indigo-300 font-bold  rounded py-2">{name}</h2>
      <p>
        <span className="text-2xl font-bold ">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benefits</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 rounded py-2 flex justify-center w-full mt-6 hover:text-lg">
        Buy now{" "}
        <ArrowCircleRightIcon className="w-6 h-6 ml-2"></ArrowCircleRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
