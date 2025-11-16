import type { Favorite } from "../../types";
import { useTranslation } from "../../hooks/useTranslation";
import ItemCard from "../common/ItemCard";
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
    <ItemCard
      iconUrl={favorite.iconUrl}
      iconAlt={favorite.name}
      title={favorite.name}
      subtitle={favorite.url}
      onClick={handleClick}
      rightElement={
        <button className="favorite-delete-button" onClick={handleDelete}>
          {t("dapp_favorite_delete")}
        </button>
      }
    />
  );
}

export default FavoriteCard;
