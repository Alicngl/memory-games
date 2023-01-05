import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function User({ name, moves, score, src ,border}) {
  return (
    <Stack bg={"#8c93e6"} p={3} borderRight={border}>
      <HStack>
        <Stack bg={"#fff"} borderRadius={50} p={1} border="2px solid #6b68ba">
          <Image src={src} w={20} h={20} />
        </Stack>
        <Stack align={"center"}>
          <Text fontSize={"xl"} color="#fff">
            {name}
          </Text>
          <Text
            width={"100px"}
            textAlign="center"
            borderRadius={20}
            bg="#fff"
            px={1}>
            Moves: {moves}
          </Text>
          <Text
            width={"100px"}
            textAlign="center"
            borderRadius={20}
            bg="#fff"
            px={1}>
            Score: {score}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
}

export default User;
