import classnames from "classnames";
import React from "react";

export function TabLabel({ label, isCurrent, onClick }) {
  const className = classnames("tabs__label", {
    "tabs__label--current": isCurrent
  });
  return (
    <li onClick={onClick} className={className}>
      {label}
    </li>
  );
}
