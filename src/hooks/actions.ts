import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { amFiltersActions } from '../store/funtech/amFilters.slice';

const actions = {
  ...amFiltersActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
