import Link from "next/link";

const WineNav = ({ products }) => {
  return (
    <div className="absolute bottom-0 flex justify-center w-full h-24 overflow-hidden">
      {products.map((product, key) => {
        return (
          <div key={key} className="mx-2">
            <Link href={`/products/${product.sku.toLowerCase()}`}>
              <a>
                <img src={product.image.url} width="50" />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default WineNav;
