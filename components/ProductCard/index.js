import { PricesContainer, Price } from "@commercelayer/react-components";

import Layout from "./Layout";
import StarRating from "./StarRating";
import Availability from "./Availability";
import Reviews from "./Reviews";
import Flavors from "./Flavors";
import BuyButton from "./BuyButton";
import Wine from "./Wine";

import designToken from "../../utils/designToken";

function ProductCard({ product }) {
  const { description, information, sku, image } = product;
  const {
    title,
    vineyard,
    varietal,
    region,
    wineType,
    ...flavors
  } = information;

  const color = designToken(wineType);

  return (
    <div
      className={`flex w-2/3 overflow-hidden text-${color}-600 bg-white shadow-xl rounded-xl`}
      style={{ height: 500 }}
    >
      <Layout url={image.url} />
      <div className="relative flex flex-col w-2/3 p-6">
        <Wine sku={sku}>
          <Availability skuCode={sku} className="self-end w-24" />
          <div className="mb-4">
            <h1 className="mb-2 text-5xl leading-10 text-black font-display">
              {title}
            </h1>
            <h2 className="mb-2 font-bold font-body">{vineyard.name}</h2>
          </div>
          <div className="flex mb-2">
            <div className="w-1/2">
              <p
                className="pr-12 content"
                dangerouslySetInnerHTML={{ __html: description.html }}
              />
              <p className="mt-2 mb-4 font-bold">
                Country of Origin: {vineyard.region.name}
              </p>
              <StarRating product={sku} className="mb-8" />
            </div>
            <div className="w-1/2">
              <Flavors flavors={flavors} className="mb-6" />
              <Reviews product={sku} className="mb-4" />
            </div>
          </div>
          <div className="flex justify-between w-full pb-4 mt-auto">
            <PricesContainer skuCode={sku}>
              <Price className="text-4xl font-display" />
            </PricesContainer>
            <BuyButton />
          </div>
        </Wine>
      </div>
    </div>
  );
}

export default ProductCard;
