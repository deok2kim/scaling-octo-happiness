import { memo, useCallback } from "react";
import type { Favorite } from "../../types";
import ItemCard from "../common/ItemCard";
import LocalizedText from "../common/LocalizedText";
import "./FavoriteCard.css";

interface FavoriteCardProps {
  favorite: Favorite;
  onDelete: (id: string) => void;
}

function FavoriteCard({ favorite, onDelete }: FavoriteCardProps) {
  const handleClick = useCallback(() => {
    window.open(favorite.url, "_blank");
  }, [favorite.url]);

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete(favorite.id);
    },
    [favorite.id, onDelete]
  );

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

export default memo(FavoriteCard);
