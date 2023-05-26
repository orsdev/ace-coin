import { Flex } from "@chakra-ui/react";
import { Logo } from "../logo";
import { Countdown } from "../countdown";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      rowGap="30px"
      flexDir={{ base: "column", xs: "row" }}
    >
      <Logo />
      <Countdown />
    </Flex>
  );
};
