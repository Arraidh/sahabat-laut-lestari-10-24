import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full">
        <Link href="/login" className="ml-auto">
          <Button colorScheme="teal" variant={"solid"}>
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}
