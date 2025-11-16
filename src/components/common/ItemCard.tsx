import { memo, ReactNode } from "react";
import OptimizedImage from "./OptimizedImage";
import "./ItemCard.css";

interface ItemCardProps {
  iconUrl: string;
  iconAlt: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  rightElement?: ReactNode;
}

function ItemCard({
  iconUrl,
  iconAlt,
  title,
  subtitle,
  onClick,
  rightElement,
}: ItemCardProps) {
  return (
    <div className="item-card" onClick={onClick}>
      <div className="item-icon-wrapper">
        <OptimizedImage
          src={iconUrl}
          alt={iconAlt}
          className="item-icon"
          loading="lazy"
        />
      </div>
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-subtitle">{subtitle}</p>
      </div>
      {rightElement && <div className="item-right">{rightElement}</div>}
    </div>
  );
}

export default memo(ItemCard);
