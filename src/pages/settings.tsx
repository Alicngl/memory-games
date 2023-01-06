import { Stack, Switch } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import SettingPage from "../components/pages/SettingPage";
import TextComponent from "../components/shared/TextComponent";

function Settings() {
  return (
    <Stack height="100vh" bg={"#6b68ba"} w="full" align={"center"}>
      <SettingPage />
    </Stack>
  );
}

export default observer(Settings);
