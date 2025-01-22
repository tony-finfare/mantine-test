import { createTheme, CSSVariablesResolver, rem } from "@mantine/core";
import { listTheme } from "./components/list/listTheme";
import { appShellTheme } from "./components/app-shell/appShellTheme";
import { buttonTheme } from "./components/button/buttonTheme";

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
    Button: buttonTheme,
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
  other: {
    padding: {
      "3xs": rem(4),
      xxs: rem(8),
      xs: rem(12),
      sm: rem(16),
      md: rem(20),
      lg: rem(24),
      xl: rem(32),
    },
    contentMaxWidth: rem(1400),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--content-max-width": theme.other.contentMaxWidth,
    "--mantine-padding-3xs": theme.other.padding["3xs"],
    "--mantine-padding-xxs": theme.other.padding.xxs,
    "--mantine-padding-xs": theme.other.padding.xs,
    "--mantine-padding-sm": theme.other.padding.sm,
    "--mantine-padding-md": theme.other.padding.md,
    "--mantine-padding-lg": theme.other.padding.lg,
    "--mantine-padding-xl": theme.other.padding.xl,
  },
  light: {},
  dark: {},
});
