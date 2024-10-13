import SpeciesProperty from "@/constants/species-mutation-property";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function SpeciesMutation({ value, setValue, error }) {
  return (
    <>
      <Stack gap={3}>
        <FormControl isInvalid={error["faoCode"]}>
          <FormLabel>{SpeciesProperty("faoCode")}</FormLabel>
          <Input
            placeholder={SpeciesProperty("faoCode")}
            id="faoCode"
            name="faoCode"
            onChange={(e) =>
              setValue({
                ...value,
                faoCode: e.target.value,
              })
            }
          />
          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("faoCode")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["typeOfFish"]}>
          <FormLabel>{SpeciesProperty("typeOfFish")}</FormLabel>

          <Input
            placeholder={SpeciesProperty("typeOfFish")}
            id="typeOfFish"
            name="typeOfFish"
            onChange={(e) =>
              setValue({
                ...value,
                typeOfFish: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("typeOfFish")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["scientificName"]}>
          <FormLabel>{SpeciesProperty("scientificName")}</FormLabel>
          <Input
            placeholder={SpeciesProperty("scientificName")}
            id="scientificName"
            name="scientificName"
            onChange={(e) =>
              setValue({
                ...value,
                scientificName: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("scientificName")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["englishName"]}>
          <FormLabel>{SpeciesProperty("englishName")}</FormLabel>

          <Input
            placeholder={SpeciesProperty("englishName")}
            id="englishName"
            name="englishName"
            onChange={(e) =>
              setValue({
                ...value,
                englishName: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("englishName")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["indonesianName"]}>
          <FormLabel>{SpeciesProperty("indonesianName")}</FormLabel>
          <Input
            placeholder={SpeciesProperty("indonesianName")}
            id="indonesianName"
            name="indonesianName"
            onChange={(e) =>
              setValue({
                ...value,
                indonesianName: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("indonesianName")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["localName"]}>
          <FormLabel>{SpeciesProperty("localName")}</FormLabel>

          <Input
            placeholder={SpeciesProperty("localName")}
            id="localName"
            name="localName"
            onChange={(e) =>
              setValue({
                ...value,
                localName: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("localName")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["typeOfWater"]}>
          <FormLabel>{SpeciesProperty("typeOfWater")}</FormLabel>

          <Input
            placeholder={SpeciesProperty("typeOfWater")}
            id="typeOfWater"
            name="typeOfWater"
            onChange={(e) =>
              setValue({
                ...value,
                typeOfWater: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("localName")}
            </FormErrorMessage>
          )}
        </FormControl>

        <Input
          placeholder="Image URL"
          id="imageUrl"
          name="imageUrl"
          onChange={(e) =>
            setValue({
              ...value,
              imageUrl: e.target.value,
            })
          }
        />

        <FormControl isInvalid={error["statusInIndonesia"]}>
          <FormLabel>{SpeciesProperty("statusInIndonesia")}</FormLabel>
          <Input
            placeholder={SpeciesProperty("statusInIndonesia")}
            id="statusInIndonesia"
            name="statusInIndonesia"
            onChange={(e) =>
              setValue({
                ...value,
                statusInIndonesia: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("statusInIndonesia")}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={error["fishUtilization"]}>
          <FormLabel>{SpeciesProperty("fishUtilization")}</FormLabel>

          <Input
            placeholder={SpeciesProperty("fishUtilization")}
            id="fishUtilization"
            name="fishUtilization"
            onChange={(e) =>
              setValue({
                ...value,
                fishUtilization: e.target.value,
              })
            }
          />

          {!error ? (
            ""
          ) : (
            <FormErrorMessage>
              Mohon mengisi {SpeciesProperty("fishUtilization")}
            </FormErrorMessage>
          )}
        </FormControl>
      </Stack>
    </>
  );
}
