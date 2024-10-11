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
        .post("https://test.api.sahabatlautlestari.com/auth/login", {
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
        loading: "Loading",
        success: "Got the data",
        error: (err) => `${err.toString()}`,
      }
    );
    // toast.promise(
    //   axios
    //     .post(`https://test.api.sahabatlautlestari.com/auth/login`, {
    //       ...user,
    //     })
    //     .then((response) => {
    //       setError({
    //         ...error,
    //         isError: false,
    //       });
    //       localStorage.setItem("token");
    //       //   router.push("/");
    //     })
    //     .catch((error) => {
    //       setError({
    //         isError: true,
    //         message: error?.response?.data?.title,
    //       });

    //       throw error;
    //     }),
    //   {
    //     loading: "Loading",
    //     success: "Berhasil Login",
    //     error: "Opps terjadi kesalahan",
    //   }
    // );
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
