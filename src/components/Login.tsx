import { Stack } from "@chakra-ui/react";
import TextComponent from "./TextComponent";

function Login() {
  return (
    <Stack align={"center"} justify="center" h={"100vh"}>
      <TextComponent children={"Memory Games"} fontsize={"3xl"} />
    </Stack>
  );
}

export default Login;
