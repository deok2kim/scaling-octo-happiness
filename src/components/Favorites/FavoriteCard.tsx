import type { Favorite } from "../../types";
import ItemCard from "../common/ItemCard";
import LocalizedText from "../common/LocalizedText";
import "./FavoriteCard.css";

interface FavoriteCardProps {
  favorite: Favorite;
  onDelete: (id: string) => void;
}

function FavoriteCard({ favorite, onDelete }: FavoriteCardProps) {
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
          <LocalizedText id="dapp_favorite_delete" defaultMessage="삭제" />
        </button>
      }
    />
  );
}

export default FavoriteCard;
