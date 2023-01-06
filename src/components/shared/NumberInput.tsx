import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function NumberInput({ handleValue }) {
  const [value, setValue] = useState({ name: "time", value: 1 });
  useEffect(() => {
    handleValue(value);
  }, [value]);
  return (
    <Stack>
      <Flex bg={"#fff"} justifyContent="space-between" borderRadius={50}>
        <Box
          alignSelf="center"
          p={1}
          onClick={() => {
            value.value != 1 &&
              setValue({ ...value, ["value"]: value.value - 1 });
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
          {value.value}
        </Box>
        <Box
          alignSelf="center"
          p={1}
          onClick={() => {
            value.value != 5 &&
              setValue({ ...value, ["value"]: value.value + 1 });
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
