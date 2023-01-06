import { Box, Flex, grid, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GRID = [
  { value: 4, borderlfet: 50 },
  { value: 6, borderright: 50 },
];
function GridButton({ handleValue }) {
  const [value, setValue] = useState({ name: "grid", value: 4 });
  useEffect(() => {
    handleValue(value);
  }, [value]);
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
            key={index}
            alignSelf={"center"}
            p={1}
            bg={value.value === item.value && "#494593"}
            color={value.value === item.value && "#fff"}
            borderLeftRadius={item.borderlfet && item.borderlfet}
            borderRightRadius={item.borderright && item.borderright}
            width="65px"
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              setValue({ ...value, ["value"]: item.value });
            }}>
            {item.value}x{item.value}
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}

export default GridButton;
