import BannerSlider from "./BannerSlider";
import { useBannersQuery } from "../../hooks/useBannersQuery";

function BannerSection() {
  const { data: banners } = useBannersQuery();
  return <BannerSlider banners={banners} />;
}

export default BannerSection;
