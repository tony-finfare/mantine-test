import { Container } from "@mantine/core";
import styles from "./Account.module.css";

export const AccountPage = () => {
  return (
    <Container
      size="var(--container-max-width)"
      className={styles["account-page"]}
    >
      Account
    </Container>
  );
};
