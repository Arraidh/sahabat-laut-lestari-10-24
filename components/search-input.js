import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { replace } from "next/router";
import react from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput() {
  //   const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  //   const search = searchParams.get("search");

  const doSearch = useDebouncedCallback((term) => {
    if (term) {
      console.log("Params ada");
      params.set("search", term);
    } else {
      console.log("Params tidak ada");
      params.delete("search");
    }
    replace(`${pathname}?${params}`);
  }, 400);

  return (
    <>
      <InputGroup size="md" bg={"white"} rounded={"md"}>
        <Input
          type="text"
          id="search-fish"
          name="search-fish"
          pr="4.5rem"
          placeholder="Cari Ikan"
          onChange={(e) => doSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <InputRightElement width="4.5rem">
          <Search2Icon />
        </InputRightElement>
      </InputGroup>
    </>
  );
}
