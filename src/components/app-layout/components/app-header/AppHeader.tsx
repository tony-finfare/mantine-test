import {
  Anchor,
  AppShell,
  Box,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Text,
} from "@mantine/core";
import styles from "./AppHeader.module.css";
import { IconChevronDown, IconCoins } from "@tabler/icons-react";
import { FC } from "react";
import { Search } from "../search/Search";

export const AppHeader = () => {
  return (
    <AppShell.Header className={styles["app-header"]}>
      <Group gap="var(--mantine-spacing-11)">
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
      </Group>
      <Box>
        <Search />
      </Box>
      <Group
        c="dimmed"
        justify="flex-end"
        align="center"
        gap="var(--mantine-spacing-9)"
      >
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
      </Group>
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
