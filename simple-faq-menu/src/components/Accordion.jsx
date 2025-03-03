import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {

  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
