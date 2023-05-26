import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Flex alignItems="center">
      <Image
        src="/images/logo.png"
        alt="AceCoinPay"
        height="29px"
        width="29px"
        objectFit="contain"
      />
      <Heading as="h3" ml="12px" variant="h3" color="_blue.300">
        AceCoin
        <Text as="span" fontWeight={400} color="#1e29558f">
          Pay
        </Text>
      </Heading>
    </Flex>
  );
};
