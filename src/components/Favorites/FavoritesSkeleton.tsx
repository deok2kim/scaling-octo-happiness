import ItemCardSkeleton from "../common/ItemCardSkeleton";
import "./FavoritesSkeleton.css";

function FavoritesSkeleton() {
  return (
    <div className="favorites-section">
      <div className="favorites-skeleton-header">
        <div className="favorites-skeleton-title" />
      </div>
      <div className="favorites-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesSkeleton;
