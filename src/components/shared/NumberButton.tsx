import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const BOX = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
];

function NumberButton({ handleValue }) {
  const [value, setValue] = useState({ name: "person", value: 1 });

  useEffect(() => {
    handleValue(value);
  }, [value]);

  return (
    <Stack minW="150px">
      <Flex
        bg={"#fff"}
        justifyContent="space-between"
        borderRadius={50}
        p={1}
        h="40px">
        {BOX.map((item, index) => (
          <Box
            key={index}
            p={1}
            alignSelf={"center"}
            bg={value.value === item.value && "#494593"}
            color={value.value === item.value && "#fff"}
            borderRadius={50}
            cursor={"pointer"}
            width="30px"
            textAlign={"center"}
            onClick={() => {
              setValue({ ...value, ["value"]: item.value });
            }}>
            {item.value}
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}

export default NumberButton;
