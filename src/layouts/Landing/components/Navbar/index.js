import React from "react";
import { NavLink } from "react-router-dom";
import navItem from "../../_navItem";
import { Dropdown } from "../../../../components";
import "./index.scss";
export default function Navbar() {
  const renderNavitems = () => {
    return navItem.map((item, index) => {
      const dropDownProps = {
        key: index,
        label: item.label,
        variant: "none",
        className: "",
      };
      const navLinkProps = {
        key: index,
        to: item.to,
        children: item.label,
        className: "btn position-relative",
        exact: true,
        activeClassName: "text-dark active",
      };
      if ("items" in item) return React.createElement(Dropdown, dropDownProps);
      if ("to" in item) return React.createElement(NavLink, navLinkProps);
      return null;
    });
  };
  return (
    <nav className="Navbar text-secondary d-none d-lg-flex flex-center gap-2 mx-auto">
      {renderNavitems()}
    </nav>
  );
}
