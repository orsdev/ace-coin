import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import CloseIcon from "remixicon-react/CloseLineIcon";
import { DefaultLayout } from "./layouts";
import { Header } from "@/components/header";

function App() {
  return (
    <DefaultLayout>
      <Button
        variant="unstyled"
        color="gray.500"
        pos="absolute"
        top="10px"
        right="10px"
      >
        <CloseIcon size="18px" />
      </Button>
      <SimpleGrid gap="30px" templateColumns="1fr 300px" width="full">
        <Box>
          <Header />
        </Box>
        <Box outline="2px solid green">2</Box>
      </SimpleGrid>
    </DefaultLayout>
  );
}

export default App;
