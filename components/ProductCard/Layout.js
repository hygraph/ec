import BoxCurve from "../shapes/BoxCurve";
import BuyButton from "./BuyButton";

const Layout = ({ url }) => {
  return (
    <div className="relative w-1/3 h-full px-4 py-6 overflow-hidden group">
      <img src={url} className="relative z-30 object-contain w-full h-full" />
      <BoxCurve className="absolute bottom-0 left-0 w-full text-gray-500 opacity-50" />
      <div className="absolute inset-0 bg-current opacity-25" />
    </div>
  );
};

export default Layout;
