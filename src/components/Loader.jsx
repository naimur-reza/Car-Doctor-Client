import React from "react";
import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-284px)] flex items-center justify-center ">
      <ReactLoading type={"spin"} color={"black"} height={"3%"} width={"3%"} />
    </div>
  );
};

export default Loader;
