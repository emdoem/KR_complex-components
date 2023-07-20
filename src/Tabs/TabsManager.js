import React, { useState } from "react";
import { TabLabel } from "./TabLabel";

export function TabsManager({ tabLabels, tabContents, children }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="tabs">
      <ul className="tabs__header">
        {tabLabels.length > 1 ? (
          tabLabels.map((label, index) => (
            <TabLabel
              key={label}
              onClick={() => setCurrentTabIndex(index)}
              isCurrent={currentTabIndex === index}
              label={label}
              index={index}
            />
          ))
        ) : (
          <TabLabel label={children} />
        )}
      </ul>
      <article className="tabs__content">
        {tabContents[currentTabIndex]}
      </article>
    </div>
  );
}
