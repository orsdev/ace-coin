import { Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface LabelProps {
  labelFor: string;
  title: string;
  info: string;
}

export const Label: FC<LabelProps> = ({ labelFor, title, info }) => {
  return (
    <Stack>
      <Text
        as="label"
        color="_blue.300"
        fontSize="1.4rem"
        fontWeight={500}
        htmlFor={labelFor}
      >
        {title}
      </Text>
      <Text as="span" color="_black.100" fontSize="1.2rem" mt="10px">
        {info}
      </Text>
    </Stack>
  );
};
