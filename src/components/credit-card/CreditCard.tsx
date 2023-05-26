import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const CreditCard = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w="full"
      px="20px"
      bg="white"
      borderRadius="20px"
    >
      <Box
        bg="_blue.200"
        height="10px"
        width="70px"
        sx={{
          filter: "drop-shadow(1px 18px 9px rgba(2, 94, 255, .5))",
        }}
      />
      <Box py="25px" bg="white" width="full">
        <Flex justifyContent="space-between" alignItems="center">
          <Image
            src="/images/chip.png"
            alt="Chip"
            sx={{
              width: "44px",
              height: "42px",
              objectFit: "contain",
            }}
          />
          <Image
            src="/images/wifi.png"
            alt="Wifi"
            sx={{
              width: "34px",
              height: "30px",
              objectFit: "contain",
            }}
          />
        </Flex>
        <Text fontWeight={400} color="_blue.300" fontSize="1.6rem" mt="50px">
          Jonathan Micheal
        </Text>
        <Flex gap="10px" alignItems="center">
          <Flex gap="4px">
            <Box bg="_blue.300" height="8px" width="8px" borderRadius="50%" />
            <Box bg="_blue.300" height="8px" width="8px" borderRadius="50%" />
            <Box bg="_blue.300" height="8px" width="8px" borderRadius="50%" />
            <Box bg="_blue.300" height="8px" width="8px" borderRadius="50%" />
          </Flex>
          <Text fontWeight={600} color="_blue.300" fontSize="1.8rem">
            345
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mt="25px">
          <Text fontWeight={600} color="_blue.300" fontSize="1.4rem">
            09 / 22
          </Text>
          <Flex justifyContent="center" alignItems="center" flexDir="column">
            <Image
              src="/images/mastercard.png"
              alt="Master Card"
              sx={{
                width: "34px",
                height: "30px",
                objectFit: "contain",
              }}
            />
            <Text fontWeight={600} color="_blue.300" fontSize=".9rem">
              mastercard
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
