import Link from "next/link";
import axios from "axios";

export default function IndexPage({ products }) {
  return (
    <div className="flex items-center justify-center h-screen bg-blek-100">
      <h2>Product Card Demos</h2>
      {products.map((product, index) => (
        <Link key={index} href={`/products/${product.sku.toLowerCase()}`}>
          <a>
            <div className="flex items-center justify-center h-20 p-8 m-6 bg-white shadow-lg rounded-xl w-72 hover:shadow-xl">
              Demo {product.title}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const ax = axios.create({
    method: "post",
    baseURL:
      "https://api-eu-central-1.graphcms.com/v2/ckgqlypt0tavl01z57x01540b",
    headers: { Authorization: `Bearer ${process.env.GCMSPROD}` },
  });

  const {
    data: { products },
  } = await ax("/master", {
    data: {
      query: `{
        products {
          title
          sku
        }
      }`,
    },
  })
    .then(({ data, errors }) => {
      if (errors) return errors;
      return data;
    })
    .catch((e) => console.log("error", e));
  return {
    props: { products },
  };
}
