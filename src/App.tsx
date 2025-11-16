import BannerSlider from "./components/Banner/BannerSlider";
import FavoritesList from "./components/Favorites/FavoritesList";
import ServiceList from "./components/ServiceList/ServiceList";
import { useBannersQuery } from "./hooks/useBannersQuery";
import { useFavoritesQuery } from "./hooks/useFavoritesQuery";
import "./App.css";

function App() {
  const { data: banners, isLoading: bannersLoading } = useBannersQuery();
  const { data: favorites, isLoading: favoritesLoading } = useFavoritesQuery();

  if (bannersLoading || favoritesLoading) {
    return <div className="app-loading">Loading...</div>;
  }

  return (
    <div className="app">
      {banners && <BannerSlider banners={banners} />}
      {favorites && <FavoritesList favorites={favorites} />}
      <ServiceList />
    </div>
  );
}

export default App;
