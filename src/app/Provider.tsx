import { MantineProvider } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
