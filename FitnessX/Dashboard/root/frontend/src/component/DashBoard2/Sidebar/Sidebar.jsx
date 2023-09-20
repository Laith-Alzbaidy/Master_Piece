import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [menusOpen, setMenusOpen] = useState({});

  const toggleMenu = (menuId) => {
    setMenusOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main Menu</span>
            </li>
            <li className="submenu active">
              <Link to="/Home">
                <i className="fa-solid fa-table-columns"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li className={`submenu ${menusOpen.users ? "active" : ""}`}>
              <a onClick={() => toggleMenu("users")}>
                <i className="fas fa-graduation-cap"></i> <span>User</span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: menusOpen.users ? "block" : "none" }}>
                <li>
                  <Link to="Users">User List</Link>
                </li>
                <li>
                  <Link to="EditUsers">User Edit</Link>
                </li>
              </ul>
            </li>
            <li className={`submenu ${menusOpen.training ? "active" : ""}`}>
              <a onClick={() => toggleMenu("training")}>
                <i className="fas fa-book-reader"></i> <span> Training</span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: menusOpen.training ? "block" : "none" }}>
                <li>
                  <Link to="Training">Training List</Link>
                </li>
                <li>
                  <Link to="AddTraining">Training Add</Link>
                </li>
              </ul>
            </li>
            <li className={`submenu ${menusOpen.exercise ? "active" : ""}`}>
              <a onClick={() => toggleMenu("exercise")}>
                <i className="fas fa-book-reader"></i> <span> Exercise</span>
                <span className="menu-arrow"></span>
              </a>
              <ul style={{ display: menusOpen.exercise ? "block" : "none" }}>
                <li>
                  <Link to="Exercise">Exercise List</Link>
                </li>
                <li>
                  <Link to="addExercise">Exercise Add</Link>
                </li>
                <li>
                  <Link>Exercise Edit</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
