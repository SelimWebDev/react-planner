import {
    UPDATE_TOTAL_PRICE
} from '../constants';
  
export default function (state, action) {
    switch (action.type) {
        case UPDATE_TOTAL_PRICE:
            let newTotal = 0

            state.scene.layers.forEach((layer) =>{
                newTotal += (30 * parseInt(layer.get('lines').size))
                newTotal += (10 * parseInt(layer.get('holes').size))
            })

            state = state.setIn(['totalPrice'], newTotal)

            console.log(state)

            break

        default:
        return state;
    }
}