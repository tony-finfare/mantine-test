import { Flex, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { forwardRef } from "react";
import styles from "./SearchRightSection.module.css";

export const SearchRightSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Flex className={styles["search-right-section"]} ref={ref}>
      <Text size="sm">Irvine, CA</Text>
      <IconChevronDown size={16} />
    </Flex>
  );
});
