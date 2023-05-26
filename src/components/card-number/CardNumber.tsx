import { FC, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import PencilIcon from "remixicon-react/PencilFillIcon";
import Cleave from "cleave.js/react";
import { CreditCardLogo } from "@/mocks";
import { Label } from "@/components";
import { InputProps } from "../type";

enum CardType {
  MASTERCARD = "mastercard",
  VISA = "visa",
  DISCOVER = "discover",
  AMEX = "amex",
  JCB = "jcb",
  UNKNOWN = "unknown",
}

export const ValidCards = ["mastercard", "visa", "discover", "amex", "jcb"];
export const CardErrorMessage = `Unsupported Card, Use a supported credit card (e.g. (${ValidCards.join(
  ","
)})`;

export const CardNumber: FC<InputProps> = ({ formik, name }) => {
  const [type, setType] = useState<CardType>(CardType.UNKNOWN);
  const hasCardLogo = Object.keys(CreditCardLogo).includes(type);

  const isInvalid = formik?.touched[name] && formik?.errors[name]?.length > 0;

  return (
    <Box width="full" mt="39px">
      <Flex alignItems="center" justifyContent="space-between">
        <Label
          labelFor="CardNumber"
          title="Card Number"
          info="Enter the 16-digit card number on the card"
        />
        <Button
          variant="unstyled"
          display="flex"
          color="_blue.200"
          alignItems="center"
        >
          <PencilIcon size="14px" />
          <Text as="span" fontWeight={600} fontSize="1.1rem" ml="5px">
            Edit
          </Text>
        </Button>
      </Flex>
      <Box
        mt="15px"
        sx={{
          "& .cleave__input": {
            fontSize: "1.4rem",
            border: "1px solid",
            borderColor: isInvalid ? "red" : "#E3E3E3",
            outline: "none",
            boxShadow: "none",
            height: "48px",
            padding: "10px 15px",
            borderRadius: "8px",
            width: "100%",
            paddingLeft: hasCardLogo ? "48px" : "20px",

            "&:focus": {
              zIndex: 1,
              borderColor: "blue",
              boxShadow: "0 0 0 1px #3182ce",
            },

            "&::placeholder": {
              opacity: 0.5,
            },
          },
        }}
      >
        <Flex tabIndex={1234} pos="relative">
          {hasCardLogo && (
            <Flex
              justifyContent="center"
              alignItems="center"
              pos="absolute"
              height="100%"
              width="45px"
              zIndex={2}
            >
              <Image
                src={CreditCardLogo[type] || ""}
                alt={type}
                width="30px"
                height="30px"
                objectFit="contain"
              />
            </Flex>
          )}
          <Cleave
            name={name}
            className="cleave__input"
            placeholder="2412 - 7512 - 3412 - 3456"
            options={{
              creditCard: true,
              delimiter: "-",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onCreditCardTypeChanged: function (type: any) {
                setType(type);
                formik.setFieldValue("cardType", type);
              },
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {isInvalid !== undefined && isInvalid !== true && (
            <Flex
              alignItems="center"
              justifyContent="center"
              pos="absolute"
              right="20px"
              height="100%"
              zIndex={2}
            >
              <Image
                src={"/images/badge.png"}
                alt={"Valid card"}
                width="20px"
                height="20px"
                objectFit="contain"
              />
            </Flex>
          )}
        </Flex>
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
