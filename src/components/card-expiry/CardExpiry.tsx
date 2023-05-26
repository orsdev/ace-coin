import { Box, SimpleGrid } from "@chakra-ui/react";
import { Label } from "@/components";
import { FC } from "react";
import { CardExpiryInput } from "./ExpiryInput";

interface CardExpiryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  month: string;
  year: string;
}

export const CardExpiry: FC<CardExpiryProps> = ({ formik, month, year }) => {
  return (
    <SimpleGrid gap="35px" rowGap="15px" templateColumns={{ md: "1fr 200px" }}>
      <Label
        labelFor="ExpiryDate"
        title="Expiry Date"
        info="Enter the expiration date of the card"
      />
      <SimpleGrid
        templateColumns={{ xs: "1fr 30px 1fr" }}
        width="full"
        alignItems="center"
      >
        <CardExpiryInput formik={formik} name={month} placeholder="02" />
        <Box
          color="_blue.300"
          textAlign="center"
          fontSize="2rem"
          fontWeight={600}
        >
          /
        </Box>
        <CardExpiryInput formik={formik} name={year} placeholder="22" />
      </SimpleGrid>
    </SimpleGrid>
  );
};
