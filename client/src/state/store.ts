import { combineReducers, configureStore } from '@reduxjs/toolkit';
import blocksReducer, { IBlocksState } from './blocksSlice';
// ...

export interface IRootState {
  blocks: IBlocksState;
}
const rootReducer = combineReducers({
  blocks: blocksReducer,
});

export const store = configureStore({ reducer: rootReducer });
