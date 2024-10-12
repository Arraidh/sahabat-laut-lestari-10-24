import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlusCircle } from "react-icons/fa";

export default function AddFishDialog() {
  const [fishSpecies, setFishSpecies] = useState({
    faoCode: "",
    typeOfFish: "",
    scientificName: "",
    englishName: "",
    indonesianName: "",
    localName: "",
    typeOfWater: "",
    imageUrl: null,
    statusInIndonesia: "",
    fishUtilization: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  function handleSpeciesAddition() {
    toast.promise(
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/species`,
          { ...fishSpecies },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => onClose())
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        }),
      {
        loading: "Membuat Data",
        success: "Berhasil menampilkan data",
        error: "Opps ada yang salah",
      }
    );
  }

  return (
    <>
      <Toaster />
      <Button
        colorScheme="gray"
        variant={"solid"}
        size={{ md: "md", base: "sm" }}
        onClick={onOpen}
        className="flex items-center gap-2"
      >
        <FaPlusCircle /> Tambah
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Tambah Data</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Stack gap={3}>
              <Input
                placeholder="FAO Code"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    faoCode: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Tipe Ikan"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    typeOfFish: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Nama Saintifik"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    scientificName: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Nama Bahasa Inggris"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    englishName: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Nama Bahasa Indonesia"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    indonesianName: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Nama Lokal"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    localName: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Tipe Air"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    typeOfWater: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Image URL"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    imageUrl: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Status di Indonesia"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    statusInIndonesia: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Pemanfaatan"
                onChange={(e) =>
                  setFishSpecies({
                    ...fishSpecies,
                    fishUtilization: e.target.value,
                  })
                }
              />
            </Stack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Batal
            </Button>
            <Button colorScheme="teal" ml={3} onClick={handleSpeciesAddition}>
              Tambah
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
