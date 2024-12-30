import { AppShell, rem } from "@mantine/core";
import styles from "./AppShell.module.css";
import clsx from "clsx";
import { getUserClassNames } from "../../theme.helpers";

export const appShellTheme = AppShell.extend({
  defaultProps: {
    classNames: (them, props) => {
      const userClassNames = getUserClassNames(
        them,
        appShellTheme.defaultProps,
        props
      );
      return {
        root: clsx(styles.root, userClassNames?.root),
        header: clsx(styles.header, userClassNames?.header),
        main: clsx(styles.main, userClassNames?.main),
        footer: clsx(styles.footer, userClassNames?.footer),
      };
    },
    header: {
      height: rem(88),
      offset: false,
    },
  },
});
