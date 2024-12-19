import { List } from "@mantine/core";
import styles from "./List.module.css";
import clsx from "clsx";

export const listTheme = List.extend({
  defaultProps: {
    className: styles.list,
    listStyleType: "none",
    classNames: (_theme, props) => {
      return { root: clsx(styles.list, props.className) };
    },
  },
});
