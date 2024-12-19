import { TextInput } from "@mantine/core";
import styles from "./Search.module.css";
import { IconSearch } from "@tabler/icons-react";
import { SearchRightSection } from "./components/SearchRightSection";
import { useEffect, useRef, useState } from "react";

export const Search = () => {
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [rightSectionWidth, setRightSectionWidth] = useState("24px");

  useEffect(() => {
    const rightSection = rightSectionRef.current;
    if (rightSection) {
      const observer = new ResizeObserver(() => {
        setRightSectionWidth(
          `calc(${
            rightSection.getBoundingClientRect().width
          }px + var(--search-right-padding))`
        );
      });

      observer.observe(rightSectionRef.current);
    }
  }, []);

  return (
    <TextInput
      classNames={{
        wrapper: styles["search__wrapper"],
        input: styles["search__input"],
        section: styles["search__section"],
      }}
      styles={{
        wrapper: { "--search-right-section-width": rightSectionWidth },
      }}
      placeholder="Save me some money"
      leftSection={<IconSearch size={24} />}
      leftSectionWidth="var(--search-left-section-width)"
      rightSection={<SearchRightSection ref={rightSectionRef} />}
      rightSectionWidth="var(--search-right-section-width)"
    />
  );
};
