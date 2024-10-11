import FishCard from "@/components/fish-card";
import fetcher from "@/utils/fetcher";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Spinner, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function SpesiesDetail() {
  const params = useParams();

  const { data, error, isLoading } = useSWR(
    `https://test.api.sahabatlautlestari.com/species/${params?.id}`,
    fetcher,
    { revalidateOnFocus: true }
  );

  return (
    <>
      <div className="flex flex-col items-center mx-auto justify-center container p-12 w-full gap-3">
        <Stack gap={1}>
          <Link href={`/`}>
            <Button colorScheme="teal" variant={"ghost"}>
              <ArrowBackIcon />
            </Button>
          </Link>
          {isLoading ? <Spinner /> : <FishCard data={data} />}
        </Stack>
      </div>
    </>
  );
}
