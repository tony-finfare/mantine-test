import { Container } from "@mantine/core";

export const containerTheme = Container.extend({
  defaultProps: {
    size: "var(--container-max-width)",
  },
});
