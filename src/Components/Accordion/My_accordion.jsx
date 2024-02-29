import React, { useState } from "react";

function My_accordian({ question, answers }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={()=>setShow(!show)}> {show?"➖":"➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answers}</p>}
    </>
  );
}

export default My_accordian;
