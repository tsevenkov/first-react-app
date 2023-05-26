import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/Profile" className={ navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Dialogs" className={ navData => navData.isActive ? s.active : s.item }>Dialogs</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/News' className={ navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='Music' className={ navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='Settings' className={ navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
      </nav>
  );
};

export default Navbar;