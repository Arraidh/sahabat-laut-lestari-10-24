import DeleteFishDialog from "@/pages/delete-fish";
import UpdateFishDialog from "@/pages/update-fish";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import DefaultFishImg from "./default-fish";
import { useEffect, useState } from "react";

export default function FishCard({ data }) {
  const [accessToken, setAccessToken] = useState(false);
  useEffect(() => {
    setAccessToken(localStorage?.getItem("token") || "");
  }, []);

  return (
    <>
      <Card h={"100%"}>
        <Link href={`/spesies/${data.id}`} className="cursor-pointer">
          <CardBody>
            <div className="flex flex-col md:flex-row gap-4">
              {data?.imageUrl ? (
                <Image
                  src={data?.imageUrl}
                  alt={data?.indonesianName}
                  borderRadius="lg"
                  className="aspect-[3/4] w-full md:w-2/4  shrink-0 object-cover"
                />
              ) : (
                <DefaultFishImg />
              )}

              <Stack spacing="3" w={"100%"}>
                <Stack spacing={0.1}>
                  <Text className="text-xs">FAO Code: {data?.faoCode}</Text>
                  <Heading size="md">{data?.indonesianName}</Heading>
                </Stack>

                {/* <Heading size="sm">{data?.englishName}</Heading>

                <Heading size="sm" className="italic !font-medium">
                  {data?.scientificName}
                </Heading> */}

                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-3 gap-y-4">
                  <div className="col-span-3">
                    <Heading size="sm" align="center" color={"teal"}>
                      Nama Ikan
                    </Heading>
                  </div>
                  <div className="col-span-1">
                    {" "}
                    <Heading size="xs">Indonesia</Heading>
                  </div>
                  <div className="col-span-2">
                    <Text className="text-xs" align={"right"}>
                      {data?.indonesianName}
                    </Text>
                  </div>
                  <div className="col-span-1">
                    <Heading size="xs">Inggris</Heading>
                  </div>
                  <div className="col-span-2">
                    <Text className="text-xs" align={"right"}>
                      {data?.englishName}
                    </Text>
                  </div>
                  <div className="col-span-1">
                    <Heading size="xs">Saintifik</Heading>
                  </div>
                  <div className="col-span-2">
                    <Text className="text-xs" align={"right"}>
                      {data?.scientificName}
                    </Text>
                  </div>
                </div>

                <Divider />
                <Stack spacing={0.1}>
                  <Heading size="xs" className="!font-medium" color={"teal"}>
                    Tipe Ikan
                  </Heading>
                  <Text className="text-xs">{data?.typeOfFish}</Text>
                </Stack>

                <Stack spacing={"1"} mt={3}>
                  <Heading size={"xs"} className="!font-medium" color={"teal"}>
                    Nama Lokal{" "}
                  </Heading>
                  <div className="flex gap-1 items-center flex-wrap">
                    {data?.localName.split(";").map((name) => (
                      <Tag
                        size={"sm"}
                        key={name}
                        variant="solid"
                        colorScheme="teal"
                      >
                        {name}
                      </Tag>
                    ))}
                  </div>
                </Stack>

                <Stack spacing={"1"} mt={3}>
                  <Heading size={"xs"} className="!font-medium" color={"teal"}>
                    Status di Indonesia
                  </Heading>
                  <Text className="text-xs">{data?.statusInIndonesia}</Text>
                </Stack>
                <Stack spacing={"1"} mt={3}>
                  <Heading size={"xs"} className="!font-medium" color={"teal"}>
                    Pemanfaatan
                  </Heading>
                  <Text className="text-xs">{data?.fishUtilization}</Text>
                </Stack>
              </Stack>
            </div>
          </CardBody>
        </Link>
        {accessToken ? (
          <CardFooter className="mt-auto flex flex-col gap-4">
            <Divider color={"black"} p={"2"} className="opacity-75" />
            <div className="flex w-full gap-2">
              <UpdateFishDialog FishData={data} />
              <DeleteFishDialog FishData={data} />
            </div>
          </CardFooter>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}
