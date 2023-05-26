import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box
      py="54px"
      px="34px"
      mx="auto"
      outline="1px solid red"
      maxW={868}
      minH={150}
      sx={{
        pos: "relative",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
