import { Flex } from "@chakra-ui/react";
import { Logo } from "../logo";
import { Countdown } from "../countdown";

export const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Logo />
      <Countdown />
    </Flex>
  );
};
