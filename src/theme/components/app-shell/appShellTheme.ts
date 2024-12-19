import { AppShell } from "@mantine/core";
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
        header: clsx(styles.header, userClassnames?.header),
        footer: clsx(styles.footer, userClassnames?.footer),
      };
    },
  },
});
