import { Button as ChakraButton, SystemStyleObject } from "@chakra-ui/react";
import { FC, MouseEvent } from "react";

interface ButtonProps {
  title: string;
  type: "button" | "submit";
  style?: SystemStyleObject | undefined;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

export const CustomButton: FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  style = {},
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <ChakraButton
      aria-label={title}
      type={type}
      height="55px"
      background="_blue.200"
      borderRadius="5px"
      fontSize="1.6rem"
      color="white"
      fontWeight={600}
      width="full"
      transition="backgroundColor .2s"
      sx={{
        "&:hover": {
          backgroundColor: "_blue.300",
        },

        "&:focus": {
          backgroundColor: "_blue.300",
          color: "white",
        },
        ...style,
      }}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onClick={onClick}
    >
      {title}
    </ChakraButton>
  );
};
