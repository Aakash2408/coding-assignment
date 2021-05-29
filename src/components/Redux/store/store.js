import { createStore } from 'redux';
import reducer from '../actionReducer';

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}