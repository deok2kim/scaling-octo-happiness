import BannerSlider from "./components/Banner/BannerSlider";
import FavoritesList from "./components/Favorites/FavoritesList";
import ServiceList from "./components/ServiceList/ServiceList";
import { useBannersQuery } from "./hooks/useBannersQuery";
import { useFavoritesQuery } from "./hooks/useFavoritesQuery";
import "./App.css";

function App() {
  const { data: banners, isLoading: bannersLoading } = useBannersQuery();
  const { data: favorites, isLoading: favoritesLoading } = useFavoritesQuery();

  return (
    <div className="app">
      <BannerSlider banners={banners || []} isLoading={bannersLoading} />
      <FavoritesList favorites={favorites || []} isLoading={favoritesLoading} />
      <ServiceList />
    </div>
  );
}

export default App;
