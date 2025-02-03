import { Button } from "@mantine/core";

import { PageContainer } from "./components/page-container/PageContainer";

function App() {
  return (
    <PageContainer>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button size="lg" variant="filled" color="blue">
          Click Me
        </Button>
        <Button size="lg" variant="outline" color="blue">
          Click Me
        </Button>
        <Button size="lg" variant="transparent" color="blue">
          Click Me
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button size="lg" variant="filled" color="danger">
          Click Me
        </Button>
        <Button size="lg" variant="outline" color="danger">
          Click Me
        </Button>
        <Button size="lg" variant="transparent" color="danger">
          Click Me
        </Button>
      </div>
    </PageContainer>
  );
}

export default App;
