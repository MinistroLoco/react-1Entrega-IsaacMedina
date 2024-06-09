import React from "react";

import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  const cartCount = 10;

  return (
    <>
      <img src="" alt="" /><FaShoppingCart size={18} />
      <span>{cartCount}</span>
    </>
  );
}

export default CartWidget;
