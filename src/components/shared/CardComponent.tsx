import { Image, Stack } from "@chakra-ui/react";

import React from "react";

function CardComponent({ src, ...props }) {
  return (
    <Stack>
      <Image alt={"animal"} src={src} {...props} />
    </Stack>
  );
}

export default CardComponent;
