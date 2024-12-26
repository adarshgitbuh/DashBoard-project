import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import customerIcon from "/customerIcon.jpg";
import chatIcon from "/chatIcon.png";
import Overview from "/OverviewI.png";
import { MdChatBubbleOutline } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Genius admin Pannel</h2>
      </div>

      <div className="sidebar-conatiner">
        <Link
          className={`link sidebar__item ${
            pathname === "/Overview" ? "highlight" : ""
          }`}
          to={"/Overview"}
        >
          <GrOverview className="sidebar__icon" />
          <span className="sidebar__text">Overview</span>
        </Link>

        <Link
          className={`link sidebar__item ${
            pathname === "/customer-history" ? "highlight" : ""
          }`}
          to={"/customer-history"}
        >
          <BsFillPersonPlusFill className="sidebar__icon" />
          <span className="sidebar__text">Customers</span>
        </Link>

        <Link
          className={`link sidebar__item ${
            pathname === "/chat-history" ? "highlight" : ""
          }`}
          to={"/chat-history"}
        >
          <MdChatBubbleOutline className="sidebar__icon" />
          <span className="sidebar__text">Chat History</span>
        </Link>

        <Link
          className={`link sidebar__item ${
            pathname === "/settings" ? "highlight" : ""
          }`}
          to={"/settings"}
        >
          <IoSettingsOutline className="sidebar__icon" />
          <span className="sidebar__text">Settings</span>
        </Link>
      </div>
    </div>
  );
}
