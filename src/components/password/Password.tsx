import { Box, Input, Text } from "@chakra-ui/react";
import { Label } from "@/components";
import { FC } from "react";
import { InputProps } from "../type";

export const Password: FC<InputProps> = ({ formik, name }) => {
  const isInvalid = formik?.touched[name] && formik?.errors[name]?.length > 0;

  return (
    <Box>
      <Label
        labelFor="Password"
        title="Password"
        info="Enter your Dynamic Password"
      />
      <Box mt="15px">
        <Input
          type="password"
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        {isInvalid && (
          <Text
            as="span"
            display="inline-block"
            color="red"
            mt="5px"
            fontSize="1.3rem"
          >
            {formik?.errors[name]}
          </Text>
        )}
      </Box>
    </Box>
  );
};
