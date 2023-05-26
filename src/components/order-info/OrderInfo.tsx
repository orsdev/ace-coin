import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export interface OrderInfoProps {
  label: string;
  value: string;
}

export const OrderInfo: FC<OrderInfoProps> = ({ label, value }) => {
  return (
    <Flex
      justifyContent="space-between"
      gap="10px"
      flexDir={{ base: "column", xs: "row" }}
    >
      <Text fontWeight={600} color="_black.200" fontSize="1.5rem">
        {label}
      </Text>
      <Text fontWeight={600} color="_blue.300" fontSize="1.5rem">
        {value}
      </Text>
    </Flex>
  );
};
