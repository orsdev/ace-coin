import { Box, Flex } from "@chakra-ui/react";

export const Countdown = () => {
  return (
    <Flex gap="2px" color="white" textAlign="center">
      <Box
        bg="_blue.300"
        py="5px"
        px="6px"
        width="22px"
        borderRadius="4px"
        fontWeight={600}
        fontSize="1.2rem"
      >
        0
      </Box>
      <Box
        bg="_blue.300"
        py="5px"
        px="6px"
        width="22px"
        borderRadius="4px"
        fontWeight={600}
        fontSize="1.2rem"
      >
        1
      </Box>
      <Box color="_blue.300" py="5px" fontWeight={600} fontSize="1.2rem">
        :
      </Box>
      <Box
        bg="_blue.300"
        py="5px"
        px="6px"
        width="22px"
        borderRadius="4px"
        fontWeight={600}
        fontSize="1.2rem"
      >
        1
      </Box>
      <Box
        bg="_blue.300"
        py="5px"
        px="6px"
        width="22px"
        borderRadius="4px"
        fontWeight={600}
        fontSize="1.2rem"
      >
        9
      </Box>
    </Flex>
  );
};
