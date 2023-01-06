import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function NumberInput() {
  const [value, setValue] = useState<number>(1);
  return (
    <Stack>
      <Flex bg={"#fff"} justifyContent="space-between" borderRadius={50}>
        <Box
          alignSelf="center"
          p={1}
          onClick={() => {
            value != 1 && setValue(value - 1);
          }}>
          <Icon
            as={ChevronLeftIcon}
            w={9}
            h={8}
            color="#fff"
            bg={"#494593"}
            borderLeftRadius={50}
          />
        </Box>
        <Box w={"60px"} textAlign="center" fontSize={"xl"} alignSelf="center">
          {value}
        </Box>
        <Box
          alignSelf="center"
          p={1}
          onClick={() => {
            value != 5 && setValue(value + 1);
          }}>
          <Icon
            as={ChevronRightIcon}
            w={9}
            h={8}
            color="#fff"
            bg={"#494593"}
            borderRightRadius={50}
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default NumberInput;
