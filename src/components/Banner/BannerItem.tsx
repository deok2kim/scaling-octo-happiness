import type { Banner } from "../../types";
import OptimizedImage from "../common/OptimizedImage";
import "./BannerItem.css";

interface BannerItemProps {
  banner: Banner;
}

function BannerItem({ banner }: BannerItemProps) {
  const handleClick = () => {
    window.open(banner.link, "_blank");
  };

  return (
    <div className="banner-item" onClick={handleClick}>
      <OptimizedImage
        src={banner.imageUrl}
        alt="banner"
        className="banner-image"
        loading="eager"
      />
      <div className="banner-content">
        {banner.description && (
          <p className="banner-description">{banner.description}</p>
        )}
        {banner.buttonText && (
          <button
            className="banner-button"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {banner.buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default BannerItem;
