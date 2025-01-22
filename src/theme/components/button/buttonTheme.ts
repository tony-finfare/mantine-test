import { Button, rem } from "@mantine/core";

export const buttonTheme = Button.extend({
  vars: (theme, props) => {
    let buttonHeight: string;
    let buttonPaddingX: string;
    let buttonBg: string;
    let buttonHover: string;
    let buttonBd: string;
    let buttonColor: string;
    let buttonFz: string;

    switch (props.size) {
      case "xs":
        buttonHeight = rem(30);
        buttonPaddingX = rem(14);
        buttonFz = rem(12);
        break;
      case "sm":
        buttonHeight = rem(36);
        buttonPaddingX = rem(18);
        buttonFz = rem(14);
        break;

      case "lg":
        buttonHeight = rem(50);
        buttonPaddingX = rem(26);
        buttonFz = rem(18);
        break;
      case "xl":
        buttonHeight = rem(60);
        buttonPaddingX = rem(32);
        buttonFz = rem(20);
        break;
      case "md":
      default:
        buttonHeight = rem(42);
        buttonPaddingX = rem(22);
        buttonFz = rem(16);
    }

    let colorTheme = theme.colors.blue;

    switch (props.color) {
      case "danger":
        colorTheme = theme.colors.red;
        break;
      default:
        colorTheme = theme.colors[props.color ?? "blue"];
    }

    switch (props.variant) {
      case "outline":
        buttonBg = "transparent";
        buttonHover = colorTheme[0];
        buttonBd = `1px solid ${colorTheme[6]}`;
        buttonColor = colorTheme[6];
        break;
      case "transparent":
        buttonBg = "transparent";
        buttonBd = "1px solid transparent";
        buttonHover = "transparent";
        buttonColor = colorTheme[6];
        break;
      case "filled":
      default:
        buttonBg = colorTheme[6];
        buttonHover = colorTheme[7];
        buttonBd = "1px solid transparent";
        buttonColor = theme.white;
    }

    return {
      root: {
        "--button-height": buttonHeight,
        "--button-padding-x": buttonPaddingX,
        "--button-radius": rem(4),
        "--button-bg": buttonBg,
        "--button-hover": buttonHover,
        "--button-bd": buttonBd,
        "--button-color": buttonColor,
        "--button-fz": buttonFz,
      },
    };
  },
  defaultProps: {
    size: "md",
    variant: "filled",
    color: "blue",
  },
});
