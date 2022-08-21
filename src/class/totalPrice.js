import { HOLE_PRICE, LINE_PRICE } from "../constants";

class TotalPrice{
    static updateTotalPrice( state ){

        let newTotal = 0

        state.scene.layers.forEach((layer) =>{
            newTotal += (LINE_PRICE * parseInt(layer.get('lines').size))
            newTotal += (HOLE_PRICE * parseInt(layer.get('holes').size))
        })

        state = state.set('totalPrice', newTotal);

        return { updatedState: state };
      }
}

export { TotalPrice as default };