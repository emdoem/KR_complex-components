import Article from "./Article";
import { Tabs, TabbedDocument } from "./Tabs";
import { Placeholder } from "./Tabs/Placeholder";

export default function App() {
  return (
    <div className="App">
      <Tabs>
        <TabbedDocument title="First">
          <Article content="You won't believe what happened next" />
        </TabbedDocument>
        <TabbedDocument title="Second">
          <Article content="Doctors hate him" />
        </TabbedDocument>
        <TabbedDocument title="Third">
          <Article content="10 best things..." />
        </TabbedDocument>
        <Placeholder content="Currently no articles to display..." />
      </Tabs>
      <hr />
    </div>
  );
}
