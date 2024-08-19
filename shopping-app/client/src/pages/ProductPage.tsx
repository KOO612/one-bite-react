import { useProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const products = useProductContext();
  const foundProduct = products.find((product) => product.id === parseInt(productId!, 10));

  if (!foundProduct) {
    return <h1>찾는 상품 없음</h1>;
  }
  return (
    <div>
      <h1>{foundProduct?.name}</h1>
      <p>{foundProduct?.explanation}</p>
      <span>{foundProduct?.price}</span>
    </div>
  );
};

export default ProductPage;
