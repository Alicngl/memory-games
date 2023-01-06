import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

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

function NumberButton() {
  const [value, setValue] = useState<number>(1);
  console.log(value);

  return (
    <Stack>
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
            bg={value === item.value && "#494593"}
            color={value === item.value && "#fff"}
            borderRadius={50}
            cursor={"pointer"}
            width="30px"
            textAlign={"center"}
            onClick={() => {
              setValue(item.value);
            }}>
            {item.value}
          </Box>
        ))}
      </Flex>
    </Stack>
  );
}

export default NumberButton;
