import { SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../shared/button";
import GridButton from "../shared/GridButton";
import NumberButton from "../shared/NumberButton";
import NumberInput from "../shared/NumberInput";
import TextComponent from "../shared/TextComponent";

function SettingPage() {
  return (
    <Stack mt={10} spacing={9}>
      <Stack align={"center"} spacing={5}>
        <TextComponent color="#fff" fontSize="3xl">
          SETTINGS
        </TextComponent>
        <Stack>
          <TextComponent color="#fff">Number Of Player</TextComponent>
          <NumberButton />
        </Stack>
        <Stack align={"center"}>
          <TextComponent color="#fff">Grid Size</TextComponent>
          <GridButton />
        </Stack>
        <Stack>
          <TextComponent color="#fff">Round Time (Minutes)</TextComponent>
          <NumberInput />
        </Stack>
      </Stack>
      <SimpleGrid columns={2} spacing={5}>
        <ButtonComponent href="/" borderRadius={20} bg="#fff">
          CANCEL
        </ButtonComponent>
        <ButtonComponent href="/games" borderRadius={20} bg="#9de8a3">
          START
        </ButtonComponent>
      </SimpleGrid>
    </Stack>
  );
}

export default SettingPage;
