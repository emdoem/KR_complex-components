import React from "react";
import { TabsManager } from "./TabsManager";

export function Tabs({ children }) {
  const tabLabels = React.Children.map(
    children,
    (tabbedDocument) => tabbedDocument.props.title
  );
  const tabContents = children;
  return (
    <TabsManager
      tabLabels={tabLabels}
      tabContents={tabContents}
      children={children}
    />
  );
}
