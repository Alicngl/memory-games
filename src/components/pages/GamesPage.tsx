import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { GAME6, GAME4 } from "../../constants";
import CardComponent from "../shared/CardComponent";
import User from "../shared/User";
import Countdown from "react-countdown";
import SettingStore from "../../stores/SettingStore";
import ModalComponent from "../shared/ModalComponent";

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
  useEffect(() => {
    const person = SettingStore.person ? SettingStore.person : 1;
    setPerson(person);

    const grid = SettingStore.grid;
    const time = SettingStore.time ? SettingStore.time : 1;
    setTime(time * 60);
    if (grid === 4) {
      setData(GAME4.sort(() => Math.random() - 0.5));
    } else {
      setData(GAME6.sort(() => Math.random() - 0.5));
    }
    if (users.length != person) {
      const sliced = users.splice(0, person);
      setUsers(sliced);
    } else {
      users;
    }
  }, []);
  useEffect(() => {
    if (time === 0) {
    }
  }, [time]);

  const checkData = (current: number) => {
    if (data[current].id === data[previousCardState].id) {
      data[current].status = "active";
      data[previousCardState].status = "active";
      setPreviousCardState(-1);

      if (changeUser === 0) {
        if (person == 1) {
          users[0].moves += 1;
          users[0].score += 1;

          setUsers([...users]);

          setChangeUser(changeUser + 1);
        } else {
          users[0].opacity = 0.4;
          users[1].opacity = 1;
          setUsers([...users]);
          users[0].moves += 1;
          users[0].score += 1;

          setUsers([...users]);

          setChangeUser(changeUser + 1);
        }
      } else {
        if (changeUser > person - 1) {
          console.log("asjdhflajsdhf");

          users[person - 1].opacity = 0.4;
          users[0].opacity = 1;
          setUsers([...users]);
          users[0].moves += 1;
          users[0].score += 1;

          setUsers([...users]);
          setChangeUser(1);
        } else {
          if (changeUser == person - 1) {
            users[0].opacity = 1;
            users[changeUser].opacity = 0.4;
            setUsers([...users]);
            console.log("değil");
            setChangeUser(0);
          } else {
            setChangeUser(changeUser + 1);

            users[changeUser].opacity = 0.4;
            users[changeUser + 1].opacity = 1;
            setUsers([...users]);
            console.log("aaaaawwwww");
          }

          users[changeUser].moves += 1;
          users[changeUser].score += 1;

          setUsers([...users]);
        }
      }
    } else {
      if (changeUser === 0) {
        if (person == 1) {
          users[0].moves += 1;

          setUsers([...users]);
        } else {
          users[0].opacity = 0.4;
          users[1].opacity = 1;
          setUsers([...users]);
          users[0].moves += 1;

          setUsers([...users]);
        }

        setChangeUser(changeUser + 1);
      } else {
        if (changeUser > person - 1) {
          users[person - 1].opacity = 0.4;
          users[0].opacity = 1;
          setUsers([...users]);
          users[0].moves += 1;

          setUsers([...users]);
          setChangeUser(1);
        } else {
          if (changeUser == person - 1) {
            users[0].opacity = 1;
            users[changeUser].opacity = 0.4;
            setUsers([...users]);
            console.log("değil");
            setChangeUser(0);
          } else {
            setChangeUser(changeUser + 1);

            users[changeUser].opacity = 0.4;
            users[changeUser + 1].opacity = 1;
            setUsers([...users]);
          }

          users[changeUser].moves += 1;

          setUsers([...users]);
        }
      }
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
  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setTime(time);
    }
  }, 1000);
  console.log(time);
  console.log(users, "aaaa");

  const statu = data.find((x) => x.status === "");
  return (
    <Stack align={"center"} mt={5} spacing={9}>
      <Flex>
        {users.map((item, index) => {
          return (
            <Stack key={index}>
              <User
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
      {/* <Countdown date={Date.now() + time * 60 * 1000} onComplete={TimeOut} />, */}

      <SimpleGrid columns={data.length === 16 ? 4 : 6} spacing={3}>
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
                width={90}
                height={20}
              />
            </Stack>
          );
        })}
      </SimpleGrid>
      <Stack>
        <Box>{time}</Box>
      </Stack>
      <ModalComponent
        onopen={time == 0 ? "onopen" : "" || !statu}
        users={users}
      />
    </Stack>
  );
}

export default GamesPage;
