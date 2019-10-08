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
        {cartItems.length ? (
          <Button full danger onPress={this.props.checkout}>
            <Text>Checkout</Text>
          </Button>
        ) : (
          <Text>Thank you for ordering!</Text>
        )}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: item => dispatch(actionCreators.checkout(item))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
