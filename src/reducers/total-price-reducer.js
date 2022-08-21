import {
    UPDATE_TOTAL_PRICE
} from '../constants';

import { TotalPrice } from '../class/export';

export default function (state, action) {
    switch (action.type) {
        case UPDATE_TOTAL_PRICE:
            return TotalPrice.updateTotalPrice(state).updatedState
    }
}