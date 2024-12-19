import { MantineTheme, MantineThemeComponents } from "@mantine/core";

export const getUserClassNames = <
  T extends Partial<MantineThemeComponents["props"]>
>(
  theme: MantineTheme,
  defaultProps: T,
  props: T
): Partial<Record<string, string>> | undefined => {
  if (props.classNames !== defaultProps.classNames) {
    return typeof props.classNames === "function"
      ? props.classNames(theme, props, null)
      : props.classNames;
  }
};
