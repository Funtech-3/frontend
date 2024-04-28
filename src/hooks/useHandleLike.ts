import { useCallback } from 'react';
import {
  usePostLikeMutation,
  useDeleteLikeMutation,
} from '../store/funtech/funtech.api';
import { useActions } from './actions';

export function useHandleLike() {
  const [postLike] = usePostLikeMutation();
  const [deleteLike] = useDeleteLikeMutation();
  const { setAlert } = useActions();

  const handleLike = useCallback(
    (favorited: boolean, id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      if (!favorited) {
        postLike(id)
          .unwrap()
          .then(() => {
            setAlert({
              isOpen: true,
              severity: 'success',
              message: 'Мероприятие добавлено в избранное',
            });
          })
          .catch(error => {
            setAlert({
              isOpen: true,
              severity: 'error',
              message: error.data.detail,
            });
          });
      } else {
        deleteLike(id)
          .unwrap()
          .then(() => {
            setAlert({
              isOpen: true,
              severity: 'success',
              message: 'Мероприятие успешно удалено из избранного',
            });
          })
          .catch(error => {
            console.log(error);
            setAlert({
              isOpen: true,
              severity: 'error',
              message: error.data.detail,
            });
          });
      }
    },
    [postLike, deleteLike, setAlert],
  );

  return { handleLike };
}
