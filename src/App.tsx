import { Suspense, useState, useCallback } from "react";
import BannerSection from "./components/Banner/BannerSection";
import BannerSkeleton from "./components/Banner/BannerSkeleton";
import FavoritesSection from "./components/Favorites/FavoritesSection";
import FavoritesSkeleton from "./components/Favorites/FavoritesSkeleton";
import ServiceList from "./components/ServiceList/ServiceList";
import ServiceListSkeleton from "./components/ServiceList/ServiceListSkeleton";
import SearchBar from "./components/ServiceList/SearchBar";
import ToastContainer from "./components/common/ToastContainer";
import "./App.css";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = useCallback((keyword: string) => {
    setSearchKeyword(keyword);
  }, []);

  return (
    <div className="app">
      <SearchBar
        onSearch={handleSearch}
        placeholder="서비스 이름 또는 설명으로 검색"
      />

      <div className="app-content">
        <Suspense fallback={<BannerSkeleton />}>
          <BannerSection />
        </Suspense>

        <Suspense fallback={<FavoritesSkeleton />}>
          <FavoritesSection />
        </Suspense>

        <Suspense fallback={<ServiceListSkeleton />}>
          <ServiceList searchKeyword={searchKeyword} />
        </Suspense>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
