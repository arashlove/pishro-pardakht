import logo from "../../../../assets/logos/logo-text-light.svg";
import profile from "../../../../assets/icons/profile.svg";
import logout from "../../../../assets/icons/logout.svg";
import _navItem from "../../_navItem";
import "./index.scss";
import { Text } from "../../../../components";
export default function Sidebar() {
  return (
    <div
      className="Sidebar shadow-sm d-flex flex-column h-100 overflow-auto fw-bold rounded-10 text-light space-no-wrap transition bg-lg-top-to-bottom pe-2 py-2"
      style={{ width: "225px" }}
    >
      <img className="w-100 ps-3" src={logo} alt="logo" />
      <div className="profile d-flex align-items-center gap-2 rounded-10 ms-2 my-2 py-1 px-2">
        <img
          width="45"
          height="45"
          className="rounded-circle object-fit-cover"
          src={profile}
          alt="profile"
        />
        امین دسومی
      </div>
      {_navItem.render()}
      <button
        className="d-flex all-none align-items-center text-light gap-2 mt-auto fw-bold"
        style={{ padding: "0 1.25rem" }}
      >
        <img width='25' src={logout} alt="logout" />
        <Text value="dashboard.components.slider-items.8.label" />
      </button>
    </div>
  );
}
