import { createTheme, rem } from "@mantine/core";
import { listTheme } from "./components/list/listTheme";
import { appShellTheme } from "./components/app-shell/appShellTheme";

export const theme = createTheme({
  autoContrast: false,
  focusRing: "auto",
  fontFamily: "Inter, sans-serif",
  headings: {
    fontFamily: "neue-haas-grotesk-display, sans-serif",
  },
  radius: {
    max: rem(1000),
  },
  components: {
    AppShell: appShellTheme,
    List: listTheme,
  },
  spacing: {
    0: rem(0),
    1: rem(2),
    2: rem(4),
    3: rem(6),
    4: rem(8),
    5: rem(12),
    6: rem(16),
    7: rem(20),
    8: rem(24),
    9: rem(32),
    10: rem(40),
    11: rem(48),
    12: rem(64),
    13: rem(128),
  },
});
