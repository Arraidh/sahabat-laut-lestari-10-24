"use client";

import { EmailIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const handleLogin = () => {
    // setError({
    //   ...error,
    //   isError: false,
    // });

    toast.promise(
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
          ...user,
        })
        .then((response) =>
          setTimeout(() => {
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            router.push("/");
          }, 2000)
        )
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        }),
      {
        loading: "Memuat akun",
        success: "Berhasil login",
        error: (err) => `${err.toString()}`,
      }
    );
  };

  return (
    <>
      <Toaster />
      <div className="p-10">
        <div className="container max-w-md mx-auto">
          <Stack gap={3}>
            <Heading size={"lg"}>Login</Heading>

            <Input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />

            {error.isError ? (
              <Alert status="error">
                <AlertIcon />
                {error.message}
              </Alert>
            ) : (
              ""
            )}
            <Button colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
