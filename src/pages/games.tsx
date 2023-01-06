import { Stack } from "@chakra-ui/react";
import GamesPage from "../components/pages/GamesPage";

function games() {
  return (
    <Stack bg={"#e6e7ff"} h="100vh" >
      <GamesPage />
    </Stack>
  );
}

export default games;
