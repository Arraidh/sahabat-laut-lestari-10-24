import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Button,
  Input,
  ListItem,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlusCircle } from "react-icons/fa";
import SpeciesMutation from "../forms/species-mutation";
import SpeciesProperty from "@/constants/species-mutation-property";

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
  const [error, setError] = useState(false);

  function handleSpeciesAddition() {
    setError(false);

    const missingValues = { ...fishSpecies };
    for (const [key, value] of Object.entries(fishSpecies)) {
      if (key != "imageUrl" && !value) {
        missingValues[key] = true;
      }
    }

    if (missingValues) {
      setError(missingValues);
      return;
    }

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
        loading: "Membuat Data ...",
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
            <SpeciesMutation
              value={fishSpecies}
              setValue={setFishSpecies}
              error={error}
            />
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
