import Panel from "./panel"
import React, { Component } from "react"

export class PanelTotalPrice extends Component {

    render(){
        return(
            <Panel name={'Total Price'}>
                {this.props.state.totalPrice}
            </Panel>
        )
    }
}