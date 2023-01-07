import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ButtonComponent from "./button";
import TextComponent from "./TextComponent";
import User from "./User";
import { useRouter } from "next/router";

function ModalComponent({ onopen, users }) {
  const [winner, setWinner] = useState(undefined);
  const router = useRouter();

  const forceReload = () => {
    router.reload();
  };
  useEffect(() => {
    var bigest = users[0].score;
    for (let index = 0; index < users.length; index++) {
      if (users[index].score > bigest) {
        setWinner(users[index]);
        bigest = users[index].score;
      } else {
        setWinner(users[0]);
      }
    }
  });
  useEffect(() => {
    if (onopen) {
      onOpen();
    }
  }, [onopen]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(winner, "...");

  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"#8c93e6"} p={5}>
            <Stack align={"center"}>
              {onopen != "onopen" ? (
                <Stack align={"center"}>
                  <TextComponent> {winner?.name} is winner</TextComponent>
                  <SimpleGrid columns={2} spacing={1}>
                    {users.map((item: any, index: number) => (
                      <User
                        key={index}
                        name={item.name}
                        moves={item.moves}
                        score={item.score}
                        src={item.src}
                        border={item.border}
                        opacity={undefined}
                      />
                    ))}
                  </SimpleGrid>
                </Stack>
              ) : (
                <Stack>
                  <TextComponent>SORRY!</TextComponent>
                  <TextComponent>Time is up!</TextComponent>
                </Stack>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter bg={"#8c93e6"}>
            <HStack align={"center"} w="full" justify={"center"} mt={5}>
              <ButtonComponent
                href={"/settings"}
                borderRadius={20}
                onClick={forceReload}>
                {"RESTART"}
              </ButtonComponent>
              <ButtonComponent href={"/"} borderRadius={20} bg="#9de8a3">
                {"NEW GAME"}
              </ButtonComponent>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}

export default ModalComponent;
