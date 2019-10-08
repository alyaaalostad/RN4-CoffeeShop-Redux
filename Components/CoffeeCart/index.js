import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/Cart";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => this.props.checkout()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch(actionCreators.removeItem())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
