import { RootState } from '..';

export const titleSelector = (state: RootState) => state.form.title;
export const descriptionSelector = (state: RootState) => state.form.description;
