import { commonTypes } from './actions';

const initState = {

};

export default (state = initState, action) => {
  switch(action.type) {
    case commonTypes.SET_BARCODE:
      return {...state, barcode: action.barcode};
    default:
      return state;
  }
};