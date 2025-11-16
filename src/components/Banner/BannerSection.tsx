import BannerSlider from "./BannerSlider";
import { useBannersQuery } from "../../hooks/useBannersQuery";
import { memo } from "react";

function BannerSection() {
  const { data: banners } = useBannersQuery();
  return <BannerSlider banners={banners} />;
}

export default memo(BannerSection);
