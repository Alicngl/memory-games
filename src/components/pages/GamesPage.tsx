import { SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { GAME } from "../../constants";
import CardComponent from "../shared/CardComponent";

function GamesPage() {
  const [data, setData] = useState(GAME.sort(() => Math.random() - 0.5));
  const cardActive = (
    item: {
      id: number;
      status: string;
      image: string;
    },
    index
  ) => {
    console.log(item, index, "ITEM");
    let newArr = [...data];
    newArr[index].status = "active";
    setData(newArr);
  };

  return (
    <Stack align={"center"}>
      <Stack>headerasasdd</Stack>
      <SimpleGrid columns={6} spacing={3}>
        {data.map((item, index) => {
          return (
            <Stack>
              <CardComponent
                onClick={() => {
                  cardActive(item, index);
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
