import "./BannerSkeleton.css";

function BannerSkeleton() {
  return (
    <div className="banner-skeleton">
      <div className="banner-skeleton-image" />
      <div className="banner-skeleton-content">
        <div className="banner-skeleton-text" />
        <div className="banner-skeleton-button" />
      </div>
    </div>
  );
}

export default BannerSkeleton;

