import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ButtonComponent from "./button";
import TextComponent from "./TextComponent";
import User from "./User";

function ModalComponent({ onopen, users }) {
  useEffect(() => {
    if (onopen) {
      onOpen();
    }
  }, [onopen]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(users, "...");
  var winner;
  var bigest = users[0].score;
  for (let index = 0; index < users.length; index++) {
    if (users[index].score > bigest) {
      bigest = users[index].score;
      winner = users[index];
    }
  }

  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"#8c93e6"} p={5}>
            <Stack align={"center"}>
              {winner?.name} is winner
              {onopen != "onopen" ? (
                <SimpleGrid columns={2} spacing={1}>
                  {users.map((item, index) => (
                    <User
                      name={item.name}
                      moves={item.moves}
                      score={item.score}
                      src={item.src}
                      border={item.border}
                      opacity={undefined}
                    />
                  ))}
                </SimpleGrid>
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
              <ButtonComponent href={"/games"} borderRadius={20}>
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
