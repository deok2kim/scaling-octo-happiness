import { useCallback, useState } from "react";
import type { Favorite } from "../../types";
import FavoriteCard from "./FavoriteCard";
import LocalizedText from "../common/LocalizedText";
import ConfirmDialog from "../Modal/ConfirmDialog";
import { useFavoriteDeleteMutation } from "../../hooks/useFavoriteDeleteMutation";
import "./FavoritesList.css";

interface FavoritesListProps {
  favorites: Favorite[];
}

function FavoritesList({ favorites }: FavoritesListProps) {
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const deleteMutation = useFavoriteDeleteMutation();

  const handleDeleteClick = useCallback((id: string) => {
    setDeleteTarget(id);
  }, []);

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      deleteMutation.mutate(deleteTarget);
      setDeleteTarget(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteTarget(null);
  };

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="favorites-section">
      <h2 className="favorites-title">
        <LocalizedText id="dapp_favorite_title" defaultMessage="즐겨찾기" />
      </h2>
      <div className="favorites-list">
        {favorites.map((favorite) => (
          <FavoriteCard
            key={favorite.id}
            favorite={favorite}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>
      {deleteTarget && (
        <ConfirmDialog
          message={
            <LocalizedText
              id="dapp_favorite_delete_confirm"
              defaultMessage="이 사이트를 즐겨찾기 목록에서 삭제 하시겠습니까?"
            />
          }
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default FavoritesList;
