import { Box, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { Label } from "@/components";
import { FC } from "react";
import { InputProps } from "../type";

export const CardCVV: FC<InputProps> = ({ formik, name }) => {
  const isInvalid = formik?.touched[name] && formik?.errors[name]?.length > 0;

  return (
    <SimpleGrid gap="35px" rowGap="15px" templateColumns={{ md: "1fr 200px" }}>
      <Label
        labelFor="CVVNumber"
        title="CVV Number"
        info="Enter the 3 or 4 digit number on the card"
      />
      <Box>
        <Input
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="432"
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
    </SimpleGrid>
  );
};
