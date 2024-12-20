import { AppShell, rem } from "@mantine/core";
import styles from "./AppShell.module.css";
import clsx from "clsx";
import { getUserClassNames } from "../../theme.helpers";

export const appShellTheme = AppShell.extend({
  defaultProps: {
    classNames: (them, props) => {
      const userClassnames = getUserClassNames(
        them,
        appShellTheme.defaultProps,
        props
      );
      return {
        root: clsx(styles.root, userClassnames?.root),
        header: clsx(styles.header, userClassnames?.header),
        main: clsx(styles.main, userClassnames?.main),
        footer: clsx(styles.footer, userClassnames?.footer),
      };
    },
    header: {
      height: rem(88),
      offset: false,
    },
  },
});
