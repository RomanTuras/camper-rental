import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout.jsx';

const HomePage = lazy(()=>import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(()=>import('../../pages/CatalogPage/CatalogPage.jsx'));
const CamperPage = lazy(()=>import('../../pages/CamperPage/CamperPage.jsx'));
const ReviewsSection = lazy(()=>import('../ReviewsSection/ReviewsSection.jsx'));
const FeaturesSection = lazy(()=>import('../FeaturesSection/FeaturesSection.jsx'));
const NotFoundPage = lazy(()=>import('../../pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Layout>
        <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="features" element={<FeaturesSection />} />
            <Route path="reviews" element={<ReviewsSection />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
