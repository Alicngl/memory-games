import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <HStack spacing={3}>
      <Flex justify={"space-between"}>
        <Text>Time :</Text>
      </Flex>
      <Flex>
        <Text>0{minutes}</Text>:<Text>{seconds}</Text>
      </Flex>
    </HStack>
  );
}
