import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "free",
      price: 0,
      benefits: ["everything available", "unlimited deals", "localized deals"],
    },
    {
      id: 2,
      name: "regular",
      price: 99.99,
      benefits: ["everything available", "unlimited deals", "localized deals"],
    },
    {
      id: 3,
      name: "premium",
      price: 999.99,
      benefits: ["everything available", "unlimited deals", "localized deals"],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-5xl font-mono">Hot pricing of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque
        magni tenetur quam corrupti quas iure dolorum harum, possimus temporibus
        eos numquam pariatur quibusdam illum nemo cupiditate suscipit ab dolor!
      </p>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
