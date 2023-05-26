import React from "react";
import s from "./Profile.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          alt=""
          className={s.firstim}
          src="https://image.winudf.com/v2/image/YXBwLmRlc2t0b3Aud2FsbHBhcGVycy5mcmVlLnNjcmVlbnhfc2NyZWVuXzBfMTUxODM1MDU3NF8wODE/screen-0.jpg?fakeurl=1&type=.jpg"
        ></img>
        <img
          alt=""
          className={s.secondim}
          src="https://77.img.avito.st/avatar/social/1024x1024/4865777377.jpg"
        ></img>
        <div className={s.descriptionBlock}>
            description
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
