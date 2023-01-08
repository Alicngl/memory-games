import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <HStack spacing={3} fontWeight="semibold">
      <Flex fontSize={"xl"} justify={"space-between"}>
        <Text color={"#494593"}>Time :</Text>
      </Flex>
      <Flex color={"#494593"} fontSize="xl">
        <Text>0{minutes}</Text>:<Text>{seconds}</Text>
      </Flex>
    </HStack>
  );
}
