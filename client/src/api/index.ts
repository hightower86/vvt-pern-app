import { IBlock } from './../state/blocksSlice';
import axios from 'axios';

//const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api/';
const BASE_URL = 'http://localhost:5000/api/';

export const apiGetBlocks = () => {
  const params = {};
  return axios(`${BASE_URL}blocks`, { params }).then((res) => res.data);
};
export const apiAddBlock = (block: IBlock) => {
  const body = block;
  return axios.post(`${BASE_URL}blocks`, { body }).then((res) => res.data);
};
export const apiUpdateBlock = (block: IBlock) => {
  //const data = block;
  return axios
    .put(`${BASE_URL}blocks/${block.id}`, block)
    .then((res) => res.data);
};
export const apiDeleteBlock = (id: number) => {
  //const body = block;
  return axios.delete(`${BASE_URL}blocks/${id}`, {}).then((res) => res.data);
};
