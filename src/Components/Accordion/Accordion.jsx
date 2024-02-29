import React, { useState } from "react";
import { questions } from "./Accordion_Api";
import My_accordion from "./My_accordion";
import "./Accordion.css"
function Accordion() {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main-div">
        <h1>Frequently Asked Questions</h1>
        {data.map((element) => {
          const { id } = element;

          return <My_accordion key={id} {...element} />;
        })}
      </section>
    </>
  );
}

export default Accordion;
