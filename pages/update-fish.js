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

import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateFishDialog({ FishData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [updateFish, setupdateFish] = React.useState({
    id: FishData?.id,
    faoCode: FishData?.faoCode,
    typeOfFish: FishData?.typeOfFish,
    scientificName: FishData?.scientificName,
    englishName: FishData?.englishName,
    indonesianName: FishData?.indonesianName,
    localName: FishData?.localName,
    typeOfWater: FishData?.typeOfWater,
    imageUrl: FishData?.imageUrl,
    statusInIndonesia: FishData?.statusInIndonesia,
    fishUtilization: FishData?.fishUtilization,
  });

  const [updateFishValidation, setFishValidation] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const HandleSubmit = async () => {
    toast.promise(
      axios
        .put(
          `https://test.api.sahabatlautlestari.com/species/${FishData?.id}`,
          { ...updateFish },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => onClose())
        .catch((error) => {
          console.log(error);
          throw new Error("");
        }),
      {
        loading: "Mengubah data",
        success: "Berhasil mengubah",
        error: "Opps terjadi kesalahan",
      }
    );
  };

  return (
    <>
      <Toaster />
      <Button variant="ghost" colorScheme="teal" width="100%" onClick={onOpen}>
        Edit
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Update Fish
            </AlertDialogHeader>

            <AlertDialogBody>
              <Stack spacing={3}>
                <Input
                  placeholder="FAO Code"
                  defaultValue={updateFish.faoCode}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      faoCode: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Tipe Ikan"
                  defaultValue={updateFish.faoCode}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      typeOfFish: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Nama Saintifik"
                  defaultValue={updateFish.scientificName}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      scientificName: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Nama Bahasa Inggris"
                  defaultValue={updateFish.englishName}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      englishName: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Nama Bahasa Indonesia"
                  defaultValue={updateFish.indonesianName}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      indonesianName: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Nama Lokal"
                  defaultValue={updateFish.localName}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      localName: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Tipe Air"
                  defaultValue={updateFish.typeOfWater}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      typeOfWater: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Image URL"
                  defaultValue={updateFish.imageUrl}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      imageUrl: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Status di Indonesia"
                  defaultValue={updateFish.statusInIndonesia}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      statusInIndonesia: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Pemanfaatan"
                  defaultValue={updateFish.fishUtilization}
                  onChange={(e) =>
                    setupdateFish({
                      ...updateFish,
                      fishUtilization: e.target.value,
                    })
                  }
                />
              </Stack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={HandleSubmit}
                ml={3}
                isDisabled={isSubmitting}
              >
                Update
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
