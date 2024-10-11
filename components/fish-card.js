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

export default function FishCard({ data }) {
  return (
    <>
      <Card h={"100%"}>
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
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
