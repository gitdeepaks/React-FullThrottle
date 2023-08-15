import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fasr React Pizza Co.</Link>

      <SearchOrder />

      <p>Deepak</p>
    </header>
  );
}

export default Header;
