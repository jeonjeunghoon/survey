import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './form/formSlice';

export const rootReducer = combineReducers({
  form: formReducer,
});
