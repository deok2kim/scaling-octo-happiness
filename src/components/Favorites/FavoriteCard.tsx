import type { Favorite } from "../../types";
import { useTranslation } from "../../hooks/useTranslation";
import "./FavoriteCard.css";

interface FavoriteCardProps {
  favorite: Favorite;
  onDelete: (id: string) => void;
}

function FavoriteCard({ favorite, onDelete }: FavoriteCardProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(favorite.url, "_blank");
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(favorite.id);
  };

  return (
    <div className="favorite-card" onClick={handleClick}>
      <div className="favorite-icon-wrapper">
        <img
          src={favorite.iconUrl}
          alt={favorite.name}
          className="favorite-icon"
        />
      </div>
      <div className="favorite-info">
        <h3 className="favorite-name">{favorite.name}</h3>
        <p className="favorite-url">{favorite.url}</p>
      </div>
      <button className="favorite-delete" onClick={handleDelete}>
        {t("dapp_favorite_delete")}
      </button>
    </div>
  );
}

export default FavoriteCard;
