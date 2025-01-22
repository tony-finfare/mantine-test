import { Button } from "@mantine/core";
import { AppLayout } from "./components/app-layout/AppLayout";
import { PageContainer } from "./components/page-container/PageContainer";
import { AccountPage } from "./pages/account/AccountPage";

function App() {
  return (
    <PageContainer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
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
  return (
    <AppLayout>
      <AccountPage />
    </AppLayout>
  );
}

export default App;
