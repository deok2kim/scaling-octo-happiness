import { useState, useEffect } from "react";
import type { Favorite } from "../../types";
import FavoriteCard from "./FavoriteCard";
import ItemCardSkeleton from "../common/ItemCardSkeleton";
import ConfirmDialog from "../Modal/ConfirmDialog";
import { useTranslation } from "../../hooks/useTranslation";
import "./FavoritesList.css";

interface FavoritesListProps {
  favorites: Favorite[];
  isLoading?: boolean;
}

function FavoritesList({
  favorites: initialFavorites,
  isLoading,
}: FavoritesListProps) {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState(initialFavorites);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => {
    setFavorites(initialFavorites);
  }, [initialFavorites]);

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

  if (isLoading) {
    return (
      <div className="favorites-section">
        <h2 className="favorites-title">{t("dapp_favorite_title")}</h2>
        <div className="favorites-list">
          {Array.from({ length: 3 }).map((_, index) => (
            <ItemCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

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
