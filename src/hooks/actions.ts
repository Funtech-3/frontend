import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filtersActions } from '../store/funtech/filters.slice';
import { userActions } from '../store/funtech/user.slice';
import { authActions } from '../store/funtech/auth.slice';
import { alertActions } from '../store/funtech/alert.slice';

const actions = {
  ...filtersActions,
  ...userActions,
  ...authActions,
  ...alertActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
