import { SimpleGrid, Stack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import SettingStore from "../../stores/SettingStore";
import ButtonComponent from "../shared/button";
import GridButton from "../shared/GridButton";
import NumberButton from "../shared/NumberButton";
import NumberInput from "../shared/NumberInput";
import TextComponent from "../shared/TextComponent";

function SettingPage() {
  const [setting, setSetting] = useState({ person: 1, grid: 6, time: 1 });

  const handleValue = (e: any) => {
    setSetting({ ...setting, [e.name]: e.value });
  };
  useEffect(() => {
    SettingStore.setSetting(setting.person, setting.grid, setting.time);
  }, [setting]);
  return (
    <Stack mt={10} spacing={39} align="center">
      {" "}
      <TextComponent color="#fff" fontSize="3xl">
        SETTINGS
      </TextComponent>
      <Stack align={"center"} spacing={5}>
        <Stack>
          <TextComponent color="#fff">Number Of Player</TextComponent>
          <NumberButton handleValue={handleValue} />
        </Stack>
        <Stack align={"center"}>
          <TextComponent color="#fff">Grid Size</TextComponent>
          <GridButton handleValue={handleValue} />
        </Stack>
        <Stack>
          <TextComponent color="#fff">Round Time (Minutes)</TextComponent>
          <NumberInput handleValue={handleValue} />
        </Stack>
      </Stack>
      <SimpleGrid columns={2} spacing={5}>
        <ButtonComponent href="/" bg="#fff">
          CANCEL
        </ButtonComponent>
        <ButtonComponent href="/games" bg="#9de8a3">
          START
        </ButtonComponent>
      </SimpleGrid>
    </Stack>
  );
}

export default observer(SettingPage);
