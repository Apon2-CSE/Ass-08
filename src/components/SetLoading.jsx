// import React, { memo } from "react";
//import { ClipLoader } from "react-spinners";
//const SetLoading = () => {
//return (
//<>
//<div className="flex justify-center items-center h-60">
//<ClipLoader color="#008cff" size={20} />
//</div>
//</>
//);
//};

//export default memo(SetLoading);
import React, { memo } from "react";

import spinner from "../assets/logo.png";
const SetLoading = () => {
  return (
    <div className="flex justify-center items-center h-60">
      <img src={spinner} alt="Loading..." className="w-16 h-16 animate-spin" />
    </div>
  );
};
export default memo(SetLoading);
