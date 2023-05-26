import { Box, Button, SimpleGrid, Stack } from "@chakra-ui/react";
import CloseIcon from "remixicon-react/CloseLineIcon";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DefaultLayout } from "./layouts";
import {
  CardCVV,
  CardErrorMessage,
  CardExpiry,
  CardNumber,
  CustomButton,
  Header,
  Password,
  ValidCards,
} from "@/components";

const ValidationSchema = Yup.object({
  cardType: Yup.string().oneOf(ValidCards, "Enter a valid card number"),
  cardNumber: Yup.string().when(["cardType"], {
    is: (value: string) => ValidCards.includes(value),
    then: () =>
      Yup.string()
        .min(19, "Enter a valid card number")
        .required("Field is required"),
    otherwise: () => {
      return Yup.string().test({
        name: "custom-test",
        exclusive: false,
        params: {},
        message: CardErrorMessage,
        test: function (_, context) {
          const card_type = context.parent.cardType;
          return ValidCards.includes(card_type);
        },
      });
    },
  }),
  expiryMonth: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Min of 2 digits")
    .max(2, "Max of 2 digits")
    .required("Field is required"),
  expiryYear: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Min of 2 digits")
    .max(2, "Max of 2 digits")
    .required("Field is required"),
  cvv: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Min of 3 digits")
    .max(4, "Max of 4 digits")
    .required("Field is required"),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters.")
    .required("Field is required"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      cartType: "",
      cardNumber: "",
      password: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <DefaultLayout>
      <Button
        variant="unstyled"
        color="gray.500"
        pos="absolute"
        top="10px"
        right="10px"
      >
        <CloseIcon size="18px" />
      </Button>
      <SimpleGrid gap="30px" templateColumns="1fr 300px" width="full">
        <Box>
          <Header />
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing="34px">
              <CardNumber formik={formik} name="cardNumber" />
              <CardCVV name="cvv" formik={formik} />
              <CardExpiry
                month="expiryMonth"
                year="expiryYear"
                formik={formik}
              />
              <Password name="password" formik={formik} />
              <CustomButton title="Pay Now" type="submit" />
            </Stack>
          </form>
        </Box>
        <Box outline="2px solid green">2</Box>
      </SimpleGrid>
    </DefaultLayout>
  );
}

export default App;
