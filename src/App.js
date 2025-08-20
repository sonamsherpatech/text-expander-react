import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        atque aliquam ex placeat non quis molestias soluta alias fugiat, et ut
        optio voluptatum eos aliquid est culpa! Saepe, tenetur voluptas.
      </TextExpander>
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam
        ad nostrum necessitatibus in architecto doloremque unde laudantium vel
        id aut, totam maiores animi repudiandae sit delectus ratione beatae.
        Repudiandae!
      </TextExpander>
      <TextExpander expanded={true} className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur
        provident veniam veritatis quo, illum eaque facilis tempore? Fugit
        minima quam facere ab repellendus recusandae!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapseButtonText = "Show less",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
