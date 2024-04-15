import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filtersActions } from '../store/funtech/filters.slice';
import { userActions } from '../store/funtech/user.slice';
import { authActions } from '../store/funtech/auth.slice';

const actions = {
  ...filtersActions,
  ...userActions,
  ...authActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
