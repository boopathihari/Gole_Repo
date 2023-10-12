import React from "react";

export default function Avatar(props) {
  return (
    <img
      alt={props.alt}
      src={props.img}
      className="rounded-full w-[40px] h-[40px]"
     
    />
  );
}
