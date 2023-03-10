import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function User({ name, moves, score, src, opacity, bg }) {
  return (
    <Stack bg={bg} p={3} border={"1px"} opacity={opacity}>
      <HStack>
        <Stack bg={"#fff"} borderRadius={50} p={1} border="2px solid #6b68ba">
          <Image src={src} w={[10, 20]} h={[10, 20]} />
        </Stack>
        <Stack align={"center"}>
          <Text fontWeight={"bold"} fontSize={["md", "xl"]} color="#fff">
            {name}
          </Text>
          {moves && (
            <Text
              width={["75px", "100px"]}
              textAlign="center"
              borderRadius={20}
              bg="#fff"
              px={1}>
              Moves: {moves}
            </Text>
          )}

          <Text
            width={["75px", "100px"]}
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
