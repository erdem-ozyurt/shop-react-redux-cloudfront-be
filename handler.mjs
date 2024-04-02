import { products } from './products.mjs';
export const getProductList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ products: products }),
  };
};

export const getProductById = async (event) => {
  const productId = event.pathParameters.productId;
  const product = await findProductById(productId);
  if (product) {
    return {
      statusCode: 200,

      body: JSON.stringify({ product: product }),
    };
  } else {
    return {
      statusCode: 404,

      body: JSON.stringify({ message: 'Product not found' }),
    };
  }
};

async function findProductById(productId) {
  return products.find((product) => product.id === productId);
}
