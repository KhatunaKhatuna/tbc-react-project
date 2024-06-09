"use client";
import { useState } from "react";
import { TextExpanderProps } from "../../types";
export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  colapsButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  marginLeft = "10px",
}: TextExpanderProps) {
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
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? colapsButtonText : expandButtonText}
      </button>
    </div>
  );
}
