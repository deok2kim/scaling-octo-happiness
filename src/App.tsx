import BannerSlider from './components/Banner/BannerSlider';
import { mockBanners } from './data/mockBanners';
import './App.css';

function App() {
  return (
    <div className="app">
      <BannerSlider banners={mockBanners} />
    </div>
  );
}

export default App;
