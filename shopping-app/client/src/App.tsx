import { Route, Routes } from 'react-router-dom';
import { HomePage, ProductPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* : 뒤의 값 -> url의 매개변수를 설정 */}
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
