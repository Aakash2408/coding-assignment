import { data } from '../data';
let localdata;
if(localStorage.getItem('Billlists')!==null){
  localdata=JSON.parse(localStorage.getItem('Billlists'));
}
else{
 localdata=data;
}
export default function Reducer(state = localdata, { type, payload }) {
  switch (type) {
    case 'addBill':
     { console.log("Printing");
      return [payload.data, ...state];
  }    
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
