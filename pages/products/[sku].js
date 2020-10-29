import axios from "axios";
import ProductCard from "../../components/ProductCard";
import WineNav from "../../components/ProductCard/WineNav";

export default function IndexPage({ product, products }) {
  return (
    <div className="flex items-center justify-center h-screen bg-blek-100">
      <ProductCard product={product} />
      <WineNav products={products} />
    </div>
  );
}

export async function getStaticPaths() {
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

  const paths = products.map((product) => ({
    params: {
      sku: product.sku.toLowerCase(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const ax = axios.create({
    method: "post",
    baseURL:
      "https://api-eu-central-1.graphcms.com/v2/ckgqlypt0tavl01z57x01540b",
    headers: { Authorization: `Bearer ${process.env.GCMSPROD}` },
  });

  const {
    data: { product, products },
  } = await ax("/master", {
    data: {
      query: `query GetProduct($sku: String!) {
        products {
            sku
            image { url }
        }
        product(where: { sku: $sku}) {
          sku
          image {
            url
          }
          description {
            html
          }
          recommendedQuantity
          information {
            ... on Wine {
              title
              wineType
              fruity: fruitForward
              tannin: tanninForward
              sweet: sweetness
              acidity
              vineyard {
                name
                region {
                  name
                }
              }
              varietal {
                name
              }
              region {
                name
              }
            }
          }
        }
      }`,
      variables: {
        sku: params.sku.toUpperCase(),
      },
    },
  })
    .then(({ data, errors }) => {
      if (errors) return errors;
      return data;
    })
    .catch((e) => console.log("error", e));

  return {
    props: { product, products },
  };
}
