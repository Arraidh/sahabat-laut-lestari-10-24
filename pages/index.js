import FishCard from "@/components/fish-card";
import fetcher from "@/utils/fetcher";
import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://test.api.sahabatlautlestari.com/species/all",
    fetcher,
    { revalidateOnFocus: true }
  );

  console.log(data);

  return (
    <>
      <div className="flex items-center mx-auto justify-center container p-12 w-full">
        <Grid
          templateColumns="repeat(3, minmax(0, 1fr))"
          gap={3}
          width={"100%"}
        >
          {data?.map((fish) => (
            <GridItem>
              <FishCard data={fish} />
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}
