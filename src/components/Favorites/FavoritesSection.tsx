import FavoritesList from "./FavoritesList";
import { useFavoritesQuery } from "../../hooks/useFavoritesQuery";
import { memo } from "react";

function FavoritesSection() {
  const { data: favorites } = useFavoritesQuery();
  return <FavoritesList favorites={favorites} />;
}

export default memo(FavoritesSection);
