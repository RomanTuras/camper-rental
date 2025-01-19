import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import CamperPage from '../../pages/CamperPage/CamperPage.jsx';
import Layout from '../Layout/Layout.jsx';
import ReviewsSection from '../ReviewsSection/ReviewsSection.jsx';
import FeaturesSection from '../FeaturesSection/FeaturesSection.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="features" element={<FeaturesSection />} />
            <Route path="reviews" element={<ReviewsSection />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
