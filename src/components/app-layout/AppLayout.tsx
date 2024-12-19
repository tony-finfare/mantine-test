import { AppShell } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import { AppHeader } from "./components/app-header/AppHeader";
import { AppFooter } from "./components/app-footer/AppFooter";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell>
      <AppHeader />
      <AppShell.Main>{children}</AppShell.Main>
      <AppFooter />
    </AppShell>
  );
};
