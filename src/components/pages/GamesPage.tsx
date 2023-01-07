import {
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { GAME6, GAME4 } from "../../constants";
import CardComponent from "../shared/CardComponent";
import User from "../shared/User";
import Countdown from "react-countdown";
import SettingStore from "../../stores/SettingStore";
import ModalComponent from "../shared/ModalComponent";
import { useRouter } from "next/router";
import Timer from "../shared/Timer";

function GamesPage() {
  const [data, setData] = useState(GAME6.sort(() => Math.random() - 0.5));
  const [users, setUsers] = useState([
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: 1,
    },
    {
      name: "Player 2",
      moves: 0,
      score: 0,
      src: "/avatar2.png",
      border: "1px",
      opacity: 0.4,
    },
    {
      name: "Player 3",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: 0.4,
    },
    {
      name: "Player 4",
      moves: 0,
      score: 0,
      src: "/avatar2.png",
      border: "1px",
      opacity: 0.4,
    },
  ]);
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const [changeUser, setChangeUser] = useState(0);
  const [time, setTime] = useState<number>();
  const [person, setPerson] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const person = SettingStore.person ? SettingStore.person : 1;
    setPerson(person);

    const grid = SettingStore.grid;
    const time = SettingStore.time ? SettingStore.time : 1;
    setTime(time * 60);
    if (grid === 4) {
      setData(GAME4.sort(() => Math.random() - 0.5));
    }
    if (users.length != person) {
      const sliced = users.splice(0, person);
      setUsers(sliced);
    }
  }, []);

  const checkData = (current: number) => {
    if (data[current].id === data[previousCardState].id) {
      data[current].status = "active";
      data[previousCardState].status = "active";

      setPreviousCardState(-1);
      if (changeUser == users.length - 1) {
        setChangeUser(0);
        users[changeUser].opacity = 0.4;
        users[0].opacity = 1;
      } else {
        setChangeUser(changeUser + 1);
        users[changeUser].opacity = 0.4;
        users[changeUser + 1].opacity = 1;
      }
      users[changeUser].score += 1;
      users[changeUser].moves += 1;

      setUsers([...users]);
    } else {
      if (changeUser == users.length - 1) {
        setChangeUser(0);
        users[changeUser].opacity = 0.4;
        users[0].opacity = 1;
      } else {
        setChangeUser(changeUser + 1);
        users[changeUser].opacity = 0.4;
        users[changeUser + 1].opacity = 1;
      }

      users[changeUser].moves += 1;

      setUsers([...users]);
      data[current].status = "active";
      setData([...data]);
      setTimeout(() => {
        setPreviousCardState(-1);
        data[current].status = "";
        data[previousCardState].status = "";
        setData([...data]);
      }, 1000);
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
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (time > 1) {
        setTime(time - 1);
      }
    }, 1000);

    const stopTimeOut = () => {
      if (time === 1 || !statu) {
        clearTimeout(timeOut);
      }
    };
    stopTimeOut();
  }, [time]);

  const statu = data.find((x) => x.status === "");
  const timer = new Date();
  timer.setSeconds(timer.getSeconds() + SettingStore.time * 60);

  return (
    <Stack align={"center"} mt={5} spacing={9}>
      <Flex>
        {users.map((item, index) => {
          return (
            <Stack key={index}>
              <User
                bg={"#8a91eb"}
                name={item.name}
                moves={users[index].moves}
                score={users[index].score}
                src={item.src}
                border={item.border}
                opacity={item.opacity}
              />
            </Stack>
          );
        })}
      </Flex>
      <SimpleGrid
        columns={data.length === 16 ? 4 : 6}
        spacing={3}
        justifySelf="center">
        {data.map((item, index) => {
          return (
            <Stack>
              <CardComponent
                zIndex={10}
                onClick={() => {
                  clickHandler(index);
                }}
                key={index}
                src={item.status === "" ? "/card-back.png" : item.image}
                width={[49, 90]}
                height={20}
              />
            </Stack>
          );
        })}
      </SimpleGrid>
      <HStack>
        <Timer expiryTimestamp={timer} />
      </HStack>
      <ModalComponent
        onopen={!statu ? "statu" : time == 1 ? "onopen" : ""}
        users={users}
      />
    </Stack>
  );
}

export default GamesPage;

//time == 0 ? "onopen" : statu ? "" : "statu"
