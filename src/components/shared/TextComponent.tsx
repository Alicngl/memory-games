import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function TextComponent({ children, ...props }) {
  return (
    <Stack>
      <Text {...props}>{children}</Text>
    </Stack>
  );
}

export default TextComponent;
