import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

function TextComponent({children,fontsize}) {
  return (
    <Stack>
        <Text fontSize={fontsize}>{children}</Text>
    </Stack>
  )
}

export default TextComponent