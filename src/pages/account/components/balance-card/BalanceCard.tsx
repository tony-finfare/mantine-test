import {
  Button,
  Center,
  Group,
  Image,
  NumberFormatter,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import styles from "./BalanceCard.module.css";

export const BalanceCard = () => {
  return (
    <Paper className={styles["balance-card"]}>
      <Group justify="space-between">
        <Image
          src="/src/assets/happy-present.svg"
          className={styles["balance-card__illustration"]}
        />
        <Stack align="flex-end" gap="var(--mantine-spacing-5)">
          <Group align="flex-end">
            <Text fz="32px" lh="32px" fw="300">
              $
            </Text>
            <NumberFormatter
              value={64.75}
              thousandSeparator
              style={{ fontSize: "60px", lineHeight: "60px", fontWeight: 300 }}
            />
          </Group>

          <Text fz="14px">
            Pending:{" "}
            <Text component="span" fz="14px" fw="600">
              $14.97
            </Text>
          </Text>

          <Text fz="14px">
            Lifetime:{" "}
            <Text component="span" fz="14px" fw="600">
              $23,482.81
            </Text>
          </Text>
        </Stack>
      </Group>
      <Center>
        <Button size="lg" variant="white">
          Withdraw
        </Button>
      </Center>
    </Paper>
  );
};
