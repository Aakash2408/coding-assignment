import { stats } from '../GivenData/stats';

export default function Reducer(state = stats, { type, payload }) {
  switch (type) {
    case 'addBill':
      return [payload.data, ...state];
    case 'editBill':
      return state.map((obj) => {
        if (obj.id === payload.data.id) return payload.data;
        else return obj;
      });
    case `deleteBill`:
      return state.filter((obj) => obj.id !== payload.id);
    default:
      return state;
  }
}
