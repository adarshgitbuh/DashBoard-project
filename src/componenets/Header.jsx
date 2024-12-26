import { useState, useRef, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuVisible]);

  return (
    <header className="outlet-header">
      <BiSearchAlt className="search-icon" />

      <div className="icon-container" ref={menuRef}>
        <IoPersonAddOutline
          className="add-account-icon"
          title="Add Account"
          onClick={toggleMenu}
        />
        {menuVisible && (
          <div className="dropdown-menu">
            <div className="dropdown-header">
              <div className="dropdown-item1">Adarsh Shetty</div>
              <div className="dropdown-item2">adarsh.shetty@gmail.com</div>
            </div>
            <button className="dropdown-item logout-button">
              <FiLogOut className="logout-icon" /> Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
