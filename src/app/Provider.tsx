import { MantineProvider } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import { resolver, theme } from "../theme/theme";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {children}
    </MantineProvider>
  );
};
