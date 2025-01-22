import { Paper, Title } from "@mantine/core";
import styles from "./LinkedCards.module.css";

export const LinkedCards = () => {
  return (
    <Paper className={styles["linked-cards"]}>
      <Title order={2} size="h3">
        Linked cards & accounts
      </Title>
    </Paper>
  );
};
