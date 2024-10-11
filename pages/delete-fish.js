import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Button,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import react from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DeleteFishDialog({ FishData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = react.useRef();

  const [isSubmitting, setIsSubmitting] = react.useState(false);

  const HandleSubmit = async () => {
    toast.promise(
      axios
        .delete(
          `https://test.api.sahabatlautlestari.com/species/${FishData?.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => onClose())
        .catch((error) => {
          throw new Error("");
        }),
      {
        loading: "Loading",
        success: "Got the data",
        error: "Error when fetching",
      }
    );
  };

  return (
    <>
      <Toaster />
      <Button variant="ghost" colorScheme="red" width="100%" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Fish
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={HandleSubmit}
                isDisabled={isSubmitting}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
