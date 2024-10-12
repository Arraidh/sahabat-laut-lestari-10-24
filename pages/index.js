import FishCard from "@/components/fish-card";
import Navbar from "@/components/navbar";
import SearchInput from "@/components/search-input";
import fetcher from "@/utils/fetcher";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import AddFishDialog from "./add-fish";
import { useDebouncedCallback } from "use-debounce";
import { replace } from "next/router";
import axios from "axios";

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

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const params = useSearchParams();
  const search = params.get("search") || "";

  const pathname = usePathname();

  const pageParams = new URLSearchParams(params);

  const PageNumber = params.get("PageNumber") || 1;

  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/species?PageNumber=${PageNumber}&PageSize=10`,
    fetcher,
    { revalidateOnFocus: true }
  );

  const [filteredData, setFilteredData] = useState(data?.data);

  const [totalPage, setTotalPage] = useState(data?.totalPages);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  useEffect(() => {
    if (search) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/species/all`)
        .then((response) => {
          console.log(response);
          const currentFilteredData = response?.data?.filter((fish) =>
            fish.indonesianName.toLowerCase().includes(search.toLowerCase())
          );

          const searchTotalPage = Math.ceil(
            currentFilteredData?.length / ITEMS_PER_PAGE
          );
          setTotalPage(searchTotalPage);
          setPage(page > searchTotalPage ? 1 : page);
          setFilteredData(
            currentFilteredData?.slice(startIndex, startIndex + ITEMS_PER_PAGE)
          );
        });
    } else {
      setFilteredData(data?.data);
      setTotalPage(data?.totalPages);
      setPage(data?.pageNumber);
    }
  }, [search, data, page]);

  const [accessToken, setAccessToken] = useState(false);
  useEffect(() => {
    setAccessToken(localStorage?.getItem("token") || "");
  }, []);

  const handlePagination = useDebouncedCallback((number) => {
    if (search) {
      setPage(number);
    } else {
      pageParams.set("PageNumber", number);

      replace(`${pathname}?${pageParams}`);
    }
  });

  // const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  // };

  return (
    <>
      <div className="flex flex-col items-center mx-auto justify-center container md:p-12 p-4 w-full gap-3">
        <Navbar />
        <Stack
          gap={3}
          className="container mt-8 px-4 py-6 rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <div className="flex justify-between items-center w-full ">
            <Heading size={{ md: "xl", base: "lg" }} color={"white"}>
              Daftar Ikan
            </Heading>

            {accessToken ? <AddFishDialog /> : ""}
          </div>
          <SearchInput />
        </Stack>
        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(1, minmax(0, 1fr))",
            lg: "repeat(2, minmax(0, 1fr))",
          }}
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
            page={parseInt(page)}
            onChange={(event, value) => handlePagination(value)}
            color="primary"
          />
        </ThemeProvider>
      </div>
    </>
  );
}
