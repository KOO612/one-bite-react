import { useRef, useState } from 'react';

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

interface ProductItemProps {
  product: ProductType;
  onDelete: (id: number) => void;
  onUpdate: (product: ProductType) => void;
}

const ProductItem = ({ product, onDelete, onUpdate }: ProductItemProps) => {
  const { id, name, price, explanation } = product;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editExplanation, setEditExplanation] = useState(product.explanation);
  const [editPrice, setEditPrice] = useState(product.price);

  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{explanation}</div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제하기
      </button>

      <button
        type="button"
        onClick={() => {
          setIsEditMode((prev) => !prev);
        }}
      >
        수정하기
      </button>

      {isEditMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate({ id, name: editName, price: editPrice, explanation: editExplanation });
          }}
        >
          <input type="text" placeholder="상품 이름" value={editName} onChange={(e) => setEditName(e.target.value)} />
          <input
            type="text"
            placeholder="상품 설명"
            value={editExplanation}
            onChange={(e) => setEditExplanation(e.target.value)}
          />
          <input
            type="number"
            placeholder="상품 가격"
            value={editPrice}
            onChange={(e) => setEditPrice(parseInt(e.target.value, 10))}
          />
          <input type="submit" value="상품 수정하기" />
        </form>
      )}
    </div>
  );
};
function HomePage() {
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

  const handleDelete = (id: number) => setProducts(products.filter((product) => product.id !== id));

  const handleUpdate = (updateProduct: { id: number; name: string; explanation: string; price: number }) => {
    setProducts(products.map((product) => (product.id === updateProduct.id ? updateProduct : product)));
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
        <ProductItem key={product.id} product={product} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </>
  );
}

export default HomePage;
