import { useState } from "react";
import Cart from "../icons/Cart";

const BuyButton = () => {
  const [productNumber, setProductNumber] = useState(6);
  return (
    <button className="flex justify-center w-64 px-6 py-2 mt-auto ml-auto text-sm font-bold tracking-wide text-current border-2 border-current rounded-full hover:shadow-xl hover:bg-current group">
      <Cart className="mr-4" />
      <span className="group-hover:text-white">Add to Cart</span>
      <input
        type="number"
        onChange={(e) => setProductNumber(e.target.value)}
        value={productNumber}
        className="w-12 font-bold text-center bg-transparent border-b border-current group-hover:text-white"
      />
    </button>
  );
};

export default BuyButton;
