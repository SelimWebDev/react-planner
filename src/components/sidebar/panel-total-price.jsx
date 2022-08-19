import Panel from "./panel"
import React, { Component } from "react"
import appReducer from "../../reducers/reducer";
import totalPriceReducer from "../../reducers/total-price-reducer";

export default class PanelTotalPrice extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            displayValue: 0
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.state.scene.layers !== prevProps.state.scene.layers) {
            //appReducer(this.props.state, {type: 'UPDATE_TOTAL_PRICE'})
            let newTotal = 0
            this.props.state.scene.layers.forEach((layer) =>{
                newTotal += (30 * parseInt(layer.get('lines').size))
                newTotal += (10 * parseInt(layer.get('holes').size))
            })
            this.setState({ displayValue: newTotal })
        }
    }

    render(){
        return(
            <Panel name={'Total Price'}>
                {this.state.displayValue}
            </Panel>
        )
    }
}