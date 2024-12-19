import {
  Anchor,
  AppShell,
  Box,
  Flex,
  Image,
  Input,
  List,
  ListItem,
  Text,
} from "@mantine/core";
import styles from "./AppHeader.module.css";
import {
  IconChevronDown,
  IconCoinBitcoin,
  IconCoins,
  IconSquareDashed,
} from "@tabler/icons-react";
import { FC } from "react";
import { Search } from "../search/Search";

export const AppHeader = () => {
  return (
    <AppShell.Header className={styles["app-header"]}>
      <Flex columnGap="11">
        <Image
          src="/src/assets/walmart.svg"
          className={styles["app-header__logo"]}
        />
        <List className={styles["app-header__left__menu-list"]}>
          <ListItem component="div">
            <Anchor size="md" c="dimmed">
              Deals
            </Anchor>
          </ListItem>
          <ListItem>
            <FakeMenu label="Stores" />
          </ListItem>
          <ListItem>
            <FakeMenu label="Offers" />
          </ListItem>
        </List>
      </Flex>
      <Box>
        <Search />
      </Box>
      <Flex c="dimmed" justify="flex-end" align="center" columnGap="9">
        <Anchor size="md" c="dimmed">
          How it works
        </Anchor>
        <Anchor size="md" c="dimmed">
          My favorites
        </Anchor>
        <Flex
          style={{
            border: "1px solid var(--mantine-color-default-border)",
            padding: "var(--mantine-spacing-3) var(--mantine-spacing-5)",
            borderRadius: "var(--mantine-radius-md)",
            columnGap: "var(--mantine-spacing-4)",
            cursor: "pointer",
          }}
        >
          <IconCoins size={24} color="var(--mantine-color-yellow-7)" />
          <Text style={{ color: "var(--mantine-color-text)", fontWeight: 600 }}>
            $64.75
          </Text>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};

const FakeMenu: FC<{ label: string }> = ({ label }) => {
  return (
    <Flex
      c="dimmed"
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "var(--mantine-spacing-2)",
        cursor: "pointer",
      }}
    >
      <Text component="p" size="md">
        {label}
      </Text>
      <IconChevronDown size={20} />
    </Flex>
  );
};
