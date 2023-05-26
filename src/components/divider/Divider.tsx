import { Box, Flex } from "@chakra-ui/react";

export const Divider = () => (
  <Flex pos="relative" alignItems="center" width="full" my="20px">
    <Box
      width="35px"
      height="30px"
      bg="white"
      borderRadius="50%"
      pos="relative"
      left="-14px"
    />
    <Box flex={1} border="1px dashed" borderColor="_black.200" opacity={0.3} />
    <Box
      width="35px"
      height="30px"
      bg="white"
      borderRadius="50%"
      pos="relative"
      right="-14px"
    />
  </Flex>
);
