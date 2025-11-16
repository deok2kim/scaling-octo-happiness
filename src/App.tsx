import BannerSlider from "./components/Banner/BannerSlider";
import FavoritesList from "./components/Favorites/FavoritesList";
import ServiceList from "./components/ServiceList/ServiceList";
import { mockBanners } from "./data/mockBanners";
import { mockFavorites } from "./data/mockFavorites";
import { mockServices } from "./data/mockServices";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BannerSlider banners={mockBanners} />
      <FavoritesList favorites={mockFavorites} />
      <ServiceList services={mockServices} />
    </div>
  );
}

export default App;
