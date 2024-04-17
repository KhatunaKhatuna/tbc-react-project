"use client";
import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  colapsButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  calssName,
  marginLeft = "10px",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: marginLeft,
    color: buttonColor,
  };

  return (
    <div className={calssName}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? colapsButtonText : expandButtonText}
      </button>
    </div>
  );
}
