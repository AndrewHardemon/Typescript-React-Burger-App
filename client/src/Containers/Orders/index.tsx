import React, {Component} from "react";
import Order from "../../Components/Order";

class Orders extends Component<any, any> {
  render(){
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

export default Orders;