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
      shadow="sm"
      bg="whiteAlpha.100"
      maxW={900}
      minH={150}
      sx={{
        pos: "relative",
        top: "80px",
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
