import FishCard from "@/components/fish-card";
import Navbar from "@/components/navbar";
import SearchInput from "@/components/search-input";
import fetcher from "@/utils/fetcher";
import { Button, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import AddFishDialog from "./add-fish";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const params = useSearchParams();
  const search = params.get("search") || "";

  const { data, error, isLoading } = useSWR(
    "https://test.api.sahabatlautlestari.com/species/all",
    fetcher,
    { revalidateOnFocus: true }
  );

  const [filteredData, setFilteredData] = useState(data);

  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  useEffect(() => {
    const currentFilteredData = data?.filter((fish) =>
      fish.indonesianName.toLowerCase().includes(search.toLowerCase())
    );
    setTotalPage(Math.ceil(currentFilteredData?.length / ITEMS_PER_PAGE));
    setFilteredData(
      currentFilteredData?.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    );
  }, [search, data, page]);

  return (
    <>
      <div className="flex flex-col items-center mx-auto justify-center container p-12 w-full gap-3">
        <Navbar />
        <div className="flex justify-between items-center w-full">
          <Heading size={"xl"}>Daftar Ikan</Heading>
          <AddFishDialog />
        </div>
        <SearchInput />
        <Grid
          templateColumns="repeat(3, minmax(0, 1fr))"
          gap={3}
          width={"100%"}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            filteredData?.map((fish) => (
              <GridItem key={fish.id}>
                <FishCard data={fish} />
              </GridItem>
            ))
          )}

          {/* {search
            ? data?.map((fish) => (
                <GridItem key={fish.id}>
                  <FishCard data={fish} />
                </GridItem>
              ))
            : filteredData?.map((fish) => (
                <GridItem key={fish.id}>
                  <FishCard data={fish} />
                </GridItem>
              ))} */}
        </Grid>
        <ThemeProvider theme={theme}>
          <Pagination
            count={totalPage}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </ThemeProvider>
      </div>
    </>
  );
}
