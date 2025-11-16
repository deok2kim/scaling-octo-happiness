import "./ItemCardSkeleton.css";

function ItemCardSkeleton() {
  return (
    <div className="item-card-skeleton">
      <div className="skeleton-icon" />
      <div className="skeleton-info">
        <div className="skeleton-title" />
        <div className="skeleton-subtitle" />
      </div>
    </div>
  );
}

export default ItemCardSkeleton;

