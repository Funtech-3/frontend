import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filtersActions } from '../store/funtech/filters.slice';
import { userActions } from '../store/funtech/user.slice';

const actions = {
  ...filtersActions,
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
