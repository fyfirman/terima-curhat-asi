import {actions} from '../UserReducer';

export const fetched = (payload) => ({type: actions.FETCHED, payload});
export const patched = (payload) => ({type: actions.PATCHED, payload});
export const flush = () => ({type: actions.FLUSH, payload: {}});
