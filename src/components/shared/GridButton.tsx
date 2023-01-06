import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const GRID = [
  { value: 4, borderlfet: 50 },
  { value: 6, borderright: 50 },
];
function GridButton() {
  const [value, setValue] = useState<number>(4);
  return (
    <Stack>
      <Flex
        bg={"#fff"}
        justifyContent="space-between"
        borderRadius={20}
        p={1}
        h="40px">
        {GRID.map((item, index) => (
          <Box
            alignSelf={"center"}
            p={1}
            bg={value === item.value && "#494593"}
            color={value === item.value && "#fff"}
            borderLeftRadius={item.borderlfet && item.borderlfet}
            borderRightRadius={item.borderright && item.borderright}
            width="65px"
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              setValue(item.value);
            }}>
            {item.value}x{item.value}
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}

export default GridButton;
