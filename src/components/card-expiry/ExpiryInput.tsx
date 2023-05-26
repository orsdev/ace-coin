import { Box, Input } from "@chakra-ui/react";
import { FC } from "react";
import { InputProps } from "../type";

export const CardExpiryInput: FC<InputProps> = ({
  formik,
  name,
  placeholder,
}) => {
  const isInvalid = formik?.touched[name] && formik?.errors[name]?.length > 0;

  return (
    <Box width="full">
      <Input
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        textAlign="center"
        _placeholder={{
          opacity: 0.5,
        }}
        sx={{
          border: "1px solid",
          borderColor: isInvalid ? "red" : "#E3E3E3",
          outline: "none",
          boxShadow: "none",
          height: "48px",
          padding: "10px 15px",
          borderRadius: "8px",
          fontSize: "1.4rem",
          width: "100%",
        }}
      />
    </Box>
  );
};
