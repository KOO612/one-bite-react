const Products = () => {
  const products = [
    { title: 'Cabbage', id: 1, isFruit: false },
    { title: 'Garlic', id: 2, isFruit: false },
    { title: 'Apple', id: 3, isFruit: true },
  ];

  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgray' }}>
      {product.title}
    </li>
  ));
  return <div>{listItems}</div>;
};

export default Products;
