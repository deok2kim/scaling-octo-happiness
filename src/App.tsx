import { Suspense } from "react";
import BannerSection from "./components/Banner/BannerSection";
import BannerSkeleton from "./components/Banner/BannerSkeleton";
import FavoritesSection from "./components/Favorites/FavoritesSection";
import FavoritesSkeleton from "./components/Favorites/FavoritesSkeleton";
import ServiceList from "./components/ServiceList/ServiceList";
import ServiceListSkeleton from "./components/ServiceList/ServiceListSkeleton";
import ToastContainer from "./components/common/ToastContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Suspense fallback={<BannerSkeleton />}>
        <BannerSection />
      </Suspense>

      <Suspense fallback={<FavoritesSkeleton />}>
        <FavoritesSection />
      </Suspense>

      <Suspense fallback={<ServiceListSkeleton />}>
        <ServiceList />
      </Suspense>

      <ToastContainer />
    </div>
  );
}

export default App;
