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

export default function FishCard({ data }) {
  return (
    <>
      <Card h={"100%"}>
        <Link href={`/spesies/${data.id}`} className="cursor-pointer">
          <CardBody>
            <Image
              src={data?.imageUrl}
              alt={data?.indonesianName}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Stack spacing={0.1}>
                <Text className="text-xs">FAO Code: {data?.faoCode}</Text>
                <Heading size="md">{data?.indonesianName}</Heading>
              </Stack>
              <Heading size="sm">{data?.englishName}</Heading>

              <Heading size="sm" className="italic !font-medium">
                {" "}
                {data?.scientificName}
              </Heading>

              <Divider />
              <Stack spacing={0.1}>
                <Heading size="xs" className="!font-medium">
                  Tipe Ikan
                </Heading>
                <Text className="text-xs">{data?.typeOfFish}</Text>
              </Stack>

              <Stack spacing={"1"} mt={3}>
                <Heading size={"xs"} className="!font-medium">
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
                <Heading size={"xs"} className="!font-medium">
                  Status di Indonesia
                </Heading>
                <Text size={"xs"}>{data?.statusInIndonesia}</Text>
              </Stack>
              <Stack spacing={"1"} mt={3}>
                <Heading size={"xs"} className="!font-medium">
                  Pemanfaatan
                </Heading>
                <Text size={"xs"}>{data?.fishUtilization}</Text>
              </Stack>
            </Stack>
          </CardBody>
        </Link>
        <Divider />
        <CardFooter>
          <UpdateFishDialog FishData={data} />
        </CardFooter>
      </Card>
    </>
  );
}
