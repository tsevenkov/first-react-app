import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <img
        alt=""
        src="https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg"
      ></img>
      {props.message}
      <div>
        <span>like</span>
        {props.counts}
      </div>
    </div>
  );
};

export default Post;
