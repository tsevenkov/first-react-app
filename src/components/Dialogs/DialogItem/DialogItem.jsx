import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/*" + props.id}><img
        alt=""
        src="https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg"
      ></img>{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;
