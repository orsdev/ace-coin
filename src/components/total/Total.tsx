import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TotalProps {
  amount: number;
  currency: string;
}

export const Total: FC<TotalProps> = ({ amount, currency }) => {
  const splitAmount = amount?.toString().split(".");
  const wholeNumber = splitAmount[0];
  const fraction = splitAmount[1];

  return (
    <Flex justifyContent="space-between" px="39px" alignItems="center">
      <Box>
        <Text fontWeight={500} color="_black.200" fontSize="1.5rem">
          You have to Pay
        </Text>
        <Text fontWeight={600} color="_blue.300" fontSize="2.5rem" mt="2px">
          <Text as="span"> {wholeNumber}</Text>
          {fraction && (
            <Text as="span" fontWeight={500} fontSize="1.6rem">
              .{fraction}
            </Text>
          )}
          <Text
            as="span"
            color="_black.200"
            fontWeight={400}
            fontSize="1.8rem"
            ml="5px"
          >
            {currency}
          </Text>
        </Text>
      </Box>
      <Box>
        <Image src="/images/scroll.png" alt="Invoice" />
      </Box>
    </Flex>
  );
};
