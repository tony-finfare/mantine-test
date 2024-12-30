import styles from "./Account.module.css";
import { PageContainer } from "../../components/page-container/PageContainer";
import { Box, Button, Stack, Title } from "@mantine/core";
import { BalanceCard } from "./components/balance-card/BalanceCard";
import { IconUserCircle } from "@tabler/icons-react";

export const AccountPage = () => {
  return (
    <PageContainer className={styles["account-page"]}>
      <Box className={styles["account-page__header"]}>
        <Title order={1} size="h2">
          My account
        </Title>
      </Box>
      <Stack align="stretch" gap="var(--mantine-spacing-8)">
        <BalanceCard />
        <Button
          variant="white"
          size="lg"
          leftSection={<IconUserCircle size="20px" />}
          className={styles["account-page__settings-button"]}
        >
          Account Settings
        </Button>
      </Stack>
    </PageContainer>
  );
};
