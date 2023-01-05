import { HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import ButtonComponent from "../shared/button";
import TextComponent from "../shared/TextComponent";

function Login() {
  return (
    <Stack align={"center"} pt={10} h={"100vh"} w="full" justify={"center"}>
      <TextComponent children={"Memory Games"} fontSize={"6xl"} color="#fff" />
      <SimpleGrid columns={2} spacing={3} maxW="6xl">
        <ButtonComponent href={"/settings"} borderRadius={20}>
          {"SETTINGS"}
        </ButtonComponent>
        <ButtonComponent href={"/games"} borderRadius={20} bg="#9de8a3">
          {"START"}
        </ButtonComponent>
      </SimpleGrid>
    </Stack>
  );
}

export default Login;
