import {UPDATE_TOTAL_PRICE} from '../constants';

  export function updateTotalPrice(price) {
    return {
      type: UPDATE_TOTAL_PRICE,
      price
    }
  }