import FavoritesList from "./FavoritesList";
import { useFavoritesQuery } from "../../hooks/useFavoritesQuery";

function FavoritesSection() {
  const { data: favorites } = useFavoritesQuery();
  return <FavoritesList favorites={favorites} />;
}

export default FavoritesSection;

