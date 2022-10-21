import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";

function ScrollTop() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <a href="#top" className="d-flex justify-content-end">
        <BiIcons.BiArrowToTop
          className={
            onHover
              ? "animate__animated animate__heartBeat"
              : "animate__animated animate__pulse"
          }
          style={{
            fontSize: "1.6em",
            color: "white",
            backgroundColor: "#393E46",
            borderRadius: "15px",
          }}
          onMouseOver={() => setOnHover(true)}
          onMouseOut={() => setOnHover(false)}
        />
      </a>
    </>
  );
}

export default ScrollTop;
