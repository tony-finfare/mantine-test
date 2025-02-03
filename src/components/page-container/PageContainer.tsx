import { Container } from "@mantine/core";
import styles from "./PageContainer.module.css";

export const PageContainer = Container.withProps({
  size: "var(--content-max-width)",
  className: styles["page-container"],
});
