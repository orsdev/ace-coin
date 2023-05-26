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
  OrderInfo,
  Password,
  Divider,
  ValidCards,
  Total,
  CreditCard,
  SuccessModal,
} from "@/components";
import { useState } from "react";

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
  const [isOpenModal, setIsOpenModal] = useState(false);

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
    onSubmit: () => {
      setIsOpenModal(true);
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
      <SimpleGrid
        gap="40px"
        rowGap="80px"
        templateColumns={{ md: "1fr 300px" }}
        width="full"
        mt="20px"
        alignItems="start"
      >
        {/* Form */}
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

        {/* Order  */}
        <Box
          bg="_blue.100"
          borderRadius="10px"
          py="25px"
          mt="60px"
          pos="relative"
        >
          <Box
            minH="50px"
            px={{ base: "28px", xs: "39px" }}
            top="0"
            marginTop="-120px"
            pos="sticky"
          >
            <CreditCard />
          </Box>
          <Box mt="50px" pos="relative" overflowX="hidden">
            <Stack spacing="15px" px="39px">
              <OrderInfo label="Company" value="Apple" />
              <OrderInfo label="Order Number" value="1266201" />
              <OrderInfo label="Company" value="MackBook Air" />
              <OrderInfo label="VAT(20%)" value="$100.00" />
            </Stack>
            <Divider />
            <Total amount={549.99} currency="USD" />
          </Box>
        </Box>
      </SimpleGrid>

      {/* Modal */}
      <SuccessModal
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          formik.resetForm();
        }}
      />
    </DefaultLayout>
  );
}

export default App;
