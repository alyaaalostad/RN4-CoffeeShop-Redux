import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="shoppingcart"
        type="AntDesign"
      >
        {this.props.items.length}
      </Icon>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
export default connect(mapStateToProps)(withNavigation(CartButton));
