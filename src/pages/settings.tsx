import { Stack, Switch } from "@chakra-ui/react";
import SettingPage from "../components/pages/SettingPage";
import TextComponent from "../components/shared/TextComponent";

function settings() {
  return (
    <Stack height="100vh" bg={"#6b68ba"} w="full" align={"center"}>
      <SettingPage />
    </Stack>
  );
}

export default settings;
