import {
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
import User from "../shared/User";
import SettingStore from "../../stores/SettingStore";
import ModalComponent from "../shared/ModalComponent";
import Timer from "../shared/Timer";

function GamesPage() {
  const [data, setData] = useState(GAME6.sort(() => Math.random() - 0.5));
  const [users, setUsers] = useState([
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      opacity: 1,
    },
    {
      name: "Player 2",
      moves: 0,
      score: 0,
      src: "/avatar2.png",
      opacity: 0.4,
    },
    {
      name: "Player 3",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      opacity: 0.4,
    },
    {
      name: "Player 4",
      moves: 0,
      score: 0,
      src: "/avatar2.png",
      opacity: 0.4,
    },
  ]);
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const [changeUser, setChangeUser] = useState(0);
  const [time, setTime] = useState<number>();

  useEffect(() => {
    const person = SettingStore.person ? SettingStore.person : 1;

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
    <Stack align={""} mt={5} spacing={9}>
      <Stack align={"center"} spacing={9}>
        <SimpleGrid columns={users.length}>
          {users.map((item, index) => {
            return (
              <Stack key={index}>
                <User
                  bg={"#8a91eb"}
                  name={item.name}
                  moves={users[index].moves}
                  score={users[index].score}
                  src={item.src}
                  opacity={item.opacity}
                />
              </Stack>
            );
          })}
        </SimpleGrid>
        <SimpleGrid
          columns={data.length === 16 ? 4 : 6}
          spacing={3}
          justifySelf="center">
          {data.map((item, index) => {
            return (
              <Stack>
                {item.status === "" ? (
                  <Image
                    onClick={() => {
                      clickHandler(index);
                    }}
                    src={"/card-back.png"}
                    width={[49, 90]}
                    height={[49, 90]}
                  />
                ) : (
                  <Stack position={"relative"} align="center">
                    <Image
                      top={0}
                      src="/card.png"
                      width={[49, 90]}
                      height={[49, 90]}
                    />
                    <Image
                      alignSelf={"center"}
                      zIndex={1}
                      src={item.image}
                      position="absolute"
                      width={[35, 70]}
                      height={[35, 70]}
                    />
                  </Stack>
                )}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Stack>

      <Stack align={"center"}>
        <Stack textAlign={"center"}>
          <Timer expiryTimestamp={timer} />

          <Slider
            w={["350px", "600px"]}
            size={"lg"}
            h="10px"
            aria-label="slider-ex-2"
            colorScheme="pink"
            value={time}
            max={SettingStore.time * 60}>
            <SliderTrack bg={"#8a91eb"} h="10px" borderRadius={50}>
              <SliderFilledTrack bg={"#494593"} />
            </SliderTrack>
          </Slider>
        </Stack>
      </Stack>

      <ModalComponent
        onopen={!statu ? "statu" : time == 1 ? "onopen" : ""}
        users={users}
      />
    </Stack>
  );
}

export default GamesPage;

//time == 0 ? "onopen" : statu ? "" : "statu"
