import { Heading } from "@chakra-ui/react";
import { IoFish } from "react-icons/io5";

export default function DefaultFishImg() {
  return (
    <>
      <div className="bg-teal-50 aspect-[3/4] w-full md:w-2/4 shrink-0 flex flex-col items-center justify-center rounded-lg shadow-md">
        <IoFish size={144} color="teal" />
        <Heading size={"xl"}>No Image</Heading>
      </div>
    </>
  );
}
