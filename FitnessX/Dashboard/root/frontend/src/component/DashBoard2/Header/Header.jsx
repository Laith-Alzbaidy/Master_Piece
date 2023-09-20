import React, { useContext } from "react";
import { AdminContext } from "../../../context";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { profileadmin } = useContext(AdminContext);

  const logOut = () => {
    Cookies.remove("jwt");
    navigate("/AdminDashboard");
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          {/* <a href="index.html" className="logo"></a>
          <a href="index.html" className="logo logo-small"></a> */}
        </div>

        <div className="menu-toggle">
          <a id="toggle_btn">
            <i className="fas fa-bars"></i>
          </a>
        </div>

        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars"></i>
        </a>

        <ul className="nav user-menu">
          <li className="nav-item dropdown language-drop me-2">
            <a
              className="dropdown-toggle nav-link header-nav-list"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-globe"></i>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item">
                <i className="flag flag-lr me-2"></i>English
              </a>
              <a className="dropdown-item">
                <i className="flag flag-bl me-2"></i>Francais
              </a>
              <a className="dropdown-item">
                <i className="flag flag-cn me-2"></i>Turkce
              </a>
            </div>
          </li>

          <li className="nav-item dropdown noti-dropdown me-2">
            <a
              className="dropdown-toggle nav-link header-nav-list"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-bell"></i>
            </a>

            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a className="clear-noti">Clear All</a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  {/* Individual Notifications */}
                  {/* ... */}
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a>View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item zoom-screen me-2">
            <a className="nav-link header-nav-list"></a>
          </li>

          <li className="nav-item dropdown has-arrow new-user-menus">
            <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span className="user-img">
                <div className="user-text">
                  <h6>{profileadmin.username}</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="user-avatar">
                  {/* User Avatar */}
                  {/* ... */}
                </div>
                <div className="user-text">
                  <h6>Soeng Souy</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item">My Profile</a>
              <a className="dropdown-item">Inbox</a>
              <a onClick={logOut} className="dropdown-item">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
