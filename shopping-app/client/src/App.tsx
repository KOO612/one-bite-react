import { useRef, useState } from 'react';

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 0,
      name: 'I Phone 13 Max',
      explanation: '디스플레이 6.1.인치 19',
      price: 12300000,
    },
  ]);

  const [name, setName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [price, setPrice] = useState(0);

  const fakeId = useRef(0);
  const handleCreate = (newProduct: Omit<ProductType, 'id'>) => {
    fakeId.current += 1;
    setProducts([
      ...products,
      {
        ...newProduct,
        id: fakeId.current,
      },
    ]);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate({
            name,
            explanation,
            price,
          });
        }}
      >
        <input value={name} type="text" placeholder="상품 이름" onChange={(e) => setName(e.target.value)} />
        <input
          value={explanation}
          type="text"
          placeholder="상품 설명"
          onChange={(e) => setExplanation(e.target.value)}
        />
        <input
          value={price}
          type="number"
          placeholder="상품 가격"
          onChange={(e) => setPrice(parseInt(e.target.value, 10))}
        />
        <input type="submit" value="상품 만들기" />
      </form>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.explanation}</div>
        </div>
      ))}
    </>
  );
}

export default App;
