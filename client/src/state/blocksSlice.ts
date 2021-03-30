import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultBlock } from '../components/Header';
import { IRootState } from './store';

// Define a type for the slice state

export interface IBlock {
  id?: number;
  text: string;
  fontSize: number;
  color: string;
  bgColor: string;
}

export interface ICurrentBlock {
  block: IBlock;
  index: number;
}
export interface IBlocksState {
  blocks: IBlock[];
  error: null | string;
  isLoading: boolean;
  currentBlock: ICurrentBlock;
}

// Define the initial state using that type
const initialState: IBlocksState = {
  blocks: [],
  error: '',
  isLoading: false,
  currentBlock: {
    block: defaultBlock,
    index: 0,
  },
};

export const blocksSlice = createSlice({
  name: 'blocks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // get blocks --------------------------------
    getBlocksFetching: (state) => {
      state.isLoading = true;
    },
    getBlocksSuccess: (state, action: PayloadAction<[]>) => {
      state.blocks = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getBlocksFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // addBlock -----------------------------
    // addBlock: (state, action: PayloadAction<IBlock>) => {
    //   state.blocks.push(action.payload);
    // },
    addBlockFetching: (state) => {
      state.isLoading = true;
    },
    addBlockSuccess: (state, action: PayloadAction<IBlock>) => {
      state.blocks.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    addBlockFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // updateBlock -----------------------------------------------
    updateBlockFetching: (state) => {
      state.isLoading = true;
    },
    updateBlockSuccess: (state, action: PayloadAction<ICurrentBlock>) => {
      state.blocks[action.payload.index] = action.payload.block;
      state.isLoading = false;
      state.error = null;
    },
    updateBlockFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // deleteBlock --------------------------------
    deleteBlockFetching: (state) => {
      state.isLoading = true;
    },
    deleteBlockSuccess: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.error = null;
    },
    deleteBlockFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    // ----------------------------------------------

    setCurrentBlock: (state, action: PayloadAction<ICurrentBlock>) => {
      state.currentBlock = action.payload;
    },
    updateBlockInList: (state, action: PayloadAction<ICurrentBlock>) => {
      state.blocks[action.payload.index] = action.payload.block;
    },
    deleteBlockFromList: (state, action: PayloadAction<number>) => {
      const index = state.blocks.findIndex((b) => b.id === action.payload);
      state.blocks.splice(index, 1);
    },
  },
});

export const {
  deleteBlockSuccess,
  deleteBlockFetching,
  deleteBlockFail,
  updateBlockSuccess,
  updateBlockFetching,
  updateBlockFail,
  addBlockSuccess,
  addBlockFetching,
  addBlockFail,
  getBlocksSuccess,
  getBlocksFetching,
  getBlocksFail,
  //addBlock,
  setCurrentBlock,
  updateBlockInList,
  deleteBlockFromList,
} = blocksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBlocks = (state: IRootState) => state.blocks;

export default blocksSlice.reducer;
