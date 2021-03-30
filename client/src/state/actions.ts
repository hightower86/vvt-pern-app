import {
  apiGetBlocks,
  apiAddBlock,
  apiUpdateBlock,
  apiDeleteBlock,
} from './../api/index';
import {
  getBlocksFail,
  getBlocksFetching,
  getBlocksSuccess,
  addBlockFail,
  addBlockFetching,
  addBlockSuccess,
  IBlock,
  updateBlockFetching,
  updateBlockSuccess,
  updateBlockFail,
  deleteBlockFail,
  deleteBlockFetching,
  deleteBlockSuccess,
  deleteBlockFromList,
} from './blocksSlice';

export const fetchBlocks = () => async (dispatch: any) => {
  dispatch(getBlocksFetching());
  try {
    const response: any = await apiGetBlocks();
    const data = response;
    dispatch(getBlocksSuccess(data));
  } catch (error) {
    dispatch(getBlocksFail(error));
  }
};
export const addBlock = (block: IBlock) => async (dispatch: any) => {
  dispatch(addBlockFetching());
  try {
    const response: any = await apiAddBlock(block);
    const data = response;
    dispatch(addBlockSuccess(data));
  } catch (error) {
    dispatch(addBlockFail(error));
  }
};
export const updateBlock = (block: IBlock) => async (dispatch: any) => {
  dispatch(updateBlockFetching());
  try {
    const response: any = await apiUpdateBlock(block);
    const data = response;
    dispatch(updateBlockSuccess(data));
  } catch (error) {
    dispatch(updateBlockFail(error));
  }
};
export const deleteBlock = (id: number) => async (dispatch: any) => {
  dispatch(deleteBlockFetching());
  try {
    const response: any = await apiDeleteBlock(id);
    const data = response;
    dispatch(deleteBlockSuccess(data));
    dispatch(deleteBlockFromList(id));
  } catch (error) {
    dispatch(deleteBlockFail(error));
  }
};
