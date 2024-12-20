import { Container, ContainerProps } from "@mantine/core";

export const PageContainer: React.FC<ContainerProps> = (props) => {
  return <Container size="var(--container-max-width)" {...props} />;
};
