import { useState } from "react";
import type { Favorite } from "../../types";
import FavoriteCard from "./FavoriteCard";
import ConfirmDialog from "../Modal/ConfirmDialog";
import { useTranslation } from "../../hooks/useTranslation";
import "./FavoritesList.css";

interface FavoritesListProps {
  favorites: Favorite[];
}

function FavoritesList({ favorites: initialFavorites }: FavoritesListProps) {
  const { t } = useTranslation();
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
      <h2 className="favorites-title">{t("dapp_favorite_title")}</h2>
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
          message={t("dapp_favorite_delete_confirm")}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default FavoritesList;

