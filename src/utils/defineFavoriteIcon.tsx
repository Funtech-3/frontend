import { Favorite } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function defineFavoriteIcon(
  favorited: boolean,
  color = 'white',
) {
  return favorited ? (
    <Favorite fontSize="large" htmlColor={color} />
  ) : (
    <FavoriteBorderIcon fontSize="large" htmlColor={color} />
  );
}
