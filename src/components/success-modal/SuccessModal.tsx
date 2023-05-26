import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose(): void;
}

export const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        size="lg"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent py="10px">
          <ModalHeader>Order Successful</ModalHeader>
          <ModalBody>
            <Text fontSize="1.4rem">
              Your order has been processed successfully.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} fontSize="1.6rem">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
