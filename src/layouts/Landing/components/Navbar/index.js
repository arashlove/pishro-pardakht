import React from "react";
import { NavLink } from "react-router-dom";
import navItem from "../../_navItem";
import { Dropdown, Text } from "../../../../components";
import "./index.scss";
export default function Navbar() {
  const renderNavitems = () => {
    return navItem.map((item, index) => {
      const dropDownProps = {
        key: index,
        label: <Text value={item.label} />,
        variant: "none",
        className: "",
      };
      const navLinkProps = {
        key: index,
        to: item.to,
        children: <Text value={item.label} />,
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
    // <nav className="Navbar text-secondary d-flex d-lg-flex flex-center gap-2 mx-auto space-no-wrap">
    <nav className="Navbar text-secondary d-flex align-items-center justify-content-start justify-content-lg-between gap-2 mx-auto space-no-wrap overflow-auto">
      {renderNavitems()}
    </nav>
  );
}
