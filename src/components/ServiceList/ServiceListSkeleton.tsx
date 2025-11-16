import ItemCardSkeleton from "../common/ItemCardSkeleton";
import "./ServiceListSkeleton.css";

function ServiceListSkeleton() {
  return (
    <div className="service-list-section">
      <div className="service-list-header">
        <div className="service-list-skeleton-title" />
      </div>
      <div className="service-list-skeleton-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default ServiceListSkeleton;
