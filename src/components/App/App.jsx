import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import CamperPage from '../../pages/CamperPage/CamperPage.jsx';
import Layout from '../Layout/Layout.jsx';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={HomePage()} />
          <Route path="/catalog" element={CatalogPage()} />
          <Route path="/catalog/:id" element={CamperPage()} />
          <Route path="*" element={CamperPage()} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
