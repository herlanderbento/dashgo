import { useState, FormEvent, ChangeEvent } from "react";
import { Flex, Button, Stack } from "@chakra-ui/react";
import router from "next/router";
import { Input } from "../components/Form/Input";

export default function SingIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    router.push("/dashboard");

    console.log(data);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <Stack spacing="4">
          <Input
            name="email"
            value={data.email}
            onChange={handleInputChange}
            type="email"
            label="E-mail"
          />
          <Input
            name="password"
            value={data.password}
            onChange={handleInputChange}
            type="password"
            label="Senha"
          />
        </Stack>

        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
