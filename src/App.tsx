import BannerSlider from "./components/Banner/BannerSlider";
import FavoritesList from "./components/Favorites/FavoritesList";
import ServiceList from "./components/ServiceList/ServiceList";
import { useBannersQuery } from "./hooks/useBannersQuery";
import { useFavoritesQuery } from "./hooks/useFavoritesQuery";
import { useServicesQuery } from "./hooks/useServicesQuery";
import "./App.css";

function App() {
  const { data: banners, isLoading: bannersLoading } = useBannersQuery();
  const { data: favorites, isLoading: favoritesLoading } = useFavoritesQuery();
  const { data: services, isLoading: servicesLoading } = useServicesQuery();

  if (bannersLoading || favoritesLoading || servicesLoading) {
    return <div className="app-loading">Loading...</div>;
  }

  return (
    <div className="app">
      {banners && <BannerSlider banners={banners} />}
      {favorites && <FavoritesList favorites={favorites} />}
      {services && <ServiceList services={services} />}
    </div>
  );
}

export default App;
