import { Button, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiDoubleFish } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState(false);
  useEffect(() => {
    setAccessToken(localStorage?.getItem("token") || "");
  }, []);

  function handleLogout() {
    localStorage?.removeItem("token");
    setAccessToken(false);
    router.reload();
  }
  return (
    <>
      <div className="flex justify-between items-center w-full bg-white p-2 shadow-lg rounded-md">
        <GiDoubleFish size={36} color="teal" />
        {accessToken ? (
          <Button
            colorScheme={"red"}
            variant={"solid"}
            size={"sm"}
            className="flex items-center gap-2"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Logout
          </Button>
        ) : (
          <Link href="/login" className="ml-auto">
            <Button
              colorScheme="teal"
              variant={"solid"}
              size={"sm"}
              className="flex items-center gap-2"
            >
              <BiLogIn /> Login
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}
