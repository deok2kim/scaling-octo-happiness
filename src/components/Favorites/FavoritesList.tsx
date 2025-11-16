import { useState } from "react";
import type { Favorite } from "../../types";
import FavoriteCard from "./FavoriteCard";
import ConfirmDialog from "../Modal/ConfirmDialog";
import { TEXTS } from "../../constants";
import "./FavoritesList.css";

interface FavoritesListProps {
  favorites: Favorite[];
}

function FavoritesList({ favorites: initialFavorites }: FavoritesListProps) {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setDeleteTarget(id);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      setFavorites(favorites.filter((fav) => fav.id !== deleteTarget));
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
      <h2 className="favorites-title">{TEXTS.FAVORITES_TITLE}</h2>
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
          message={TEXTS.DELETE_CONFIRM}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default FavoritesList;

