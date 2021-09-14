import React from "react";

const Scroll = (props) => {
  return <div className="overflow-y-auto border-t border-b border-white" style={{maxHeight:`calc(100vh - 130px)`}}>{props.children}</div>;
};

export default Scroll;