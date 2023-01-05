import { Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { GAME } from "../../constants";
import CardComponent from "../shared/CardComponent";
import User from "../shared/User";

function GamesPage() {
  const [data, setData] = useState(GAME.sort(() => Math.random() - 0.5));

  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);

  const checkData = (current) => {
    if (data[current].id === data[previousCardState].id) {
      data[current].status = "active";
      data[previousCardState].status = "active";
      setPreviousCardState(-1);
    } else {
      data[current].status = "active";
      setData([...data]);
      setTimeout(() => {
        setPreviousCardState(-1);
        data[current].status = "";
        data[previousCardState].status = "";
        setData([...data]);
      }, 500);
    }
  };

  const clickHandler = async (index: number) => {
    if (index != previousIndex.current) {
      if (data[index].status === "active") {
        alert("Already Matched!!!");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          data[index].status = "active";
          setData([...data]);
          setPreviousCardState(index);
        } else {
          checkData(index);
          previousIndex.current = -1;
        }
      }
    }
  };

  return (
    <Stack align={"center"}>
      <Flex>
        <User
          src={"/avatar1.png"}
          name={"Player 1"}
          moves={1}
          score={1}
          border="1px"
        />
        <User
          src={"/avatar2.png"}
          name={"Player 2"}
          moves={1}
          score={1}
          border=""
        />
      </Flex>
      <SimpleGrid columns={6} spacing={3}>
        {data.map((item, index) => {
          return (
            <Stack>
              <CardComponent
                onClick={() => {
                  clickHandler(index);
                }}
                key={index}
                src={item.status === "" ? "/card-back.png" : item.image}
                width={90}
                height={20}
              />
            </Stack>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}

export default GamesPage;
