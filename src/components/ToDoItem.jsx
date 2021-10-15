import React from "react";

export default (props) => {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.name}
    </li>
  );
};
