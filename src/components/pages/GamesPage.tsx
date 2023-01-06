import {
  Flex,
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

function GamesPage() {
  const [data, setData] = useState(GAME6.sort(() => Math.random() - 0.5));

  const [details, setDetails] = useState([
    { moves: 0, score: 0 },
    { moves: 0, score: 0 },
    { moves: 0, score: 0 },
    { moves: 0, score: 0 },
  ]);
  const [users, setUsers] = useState([
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: undefined,
    },
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: undefined,
    },
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: undefined,
    },
    {
      name: "Player 1",
      moves: 0,
      score: 0,
      src: "/avatar1.png",
      border: "1px",
      opacity: undefined,
    },
  ]);
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const [changeUser, setChangeUser] = useState(0);
  const [time, setTime] = useState(60);
  useEffect(() => {
    const person = SettingStore.person ? SettingStore.person : 1;
    const grid = SettingStore.grid;
    const time = SettingStore.time ? SettingStore.time : 1;
    setTime(time);
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
  // setTimeout(() => {
  //   setTime(time - 1);
  //   console.log(time, "asdddd");
  // }, 1000);

  const checkData = (current: number) => {
    if (data[current].id === data[previousCardState].id) {
      data[current].status = "active";
      data[previousCardState].status = "active";
      setPreviousCardState(-1);

      if (changeUser === 0) {
        details[changeUser].moves += 1;
        details[changeUser].score += 1;
        setDetails([...details]);

        setChangeUser(changeUser + 1);
      } else {
        if (changeUser > SettingStore.person - 1) {
          details[0].moves += 1;
          details[changeUser].score += 1;
          setDetails([...details]);
          setDetails([...details]);
          setChangeUser(1);
          console.log("lengt büyük");
        } else {
          details[changeUser].moves += 1;
          details[changeUser].score += 1;
          setDetails([...details]);

          setChangeUser(changeUser + 1);
        }
      }
    } else {
      if (changeUser === 0) {
        details[0].moves += 1;

        setDetails([...details]);

        setChangeUser(changeUser + 1);
      } else {
        console.log("else");

        if (changeUser > SettingStore.person - 1) {
          details[0].moves += 1;

          setDetails([...details]);
          setChangeUser(1);
          console.log("lengt büyük");
        } else {
          details[changeUser].moves += 1;

          setDetails([...details]);

          setChangeUser(changeUser + 1);
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
  //   setTimeout(()=>{
  //     setTime(time-1)
  //     console.log(time);

  //   },1000)
  const TimeOut = () => {
    console.log("asdasdasd");
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  };

  return (
    <Stack align={"center"} mt={5} spacing={9}>
      <Flex>
        {users.map((item, index) => {
          return (
            <Stack key={index}>
              <User
                name={item.name}
                moves={details[index].moves}
                score={details[index].score}
                src={item.src}
                border={item.border}
                opacity={item.opacity}
              />
            </Stack>
          );
        })}
        {/* <User
          opacity={changeUser === false ? "0.4" : "1"}
          src={"/avatar1.png"}
          name={"Player 1"}
          moves={user1.moves}
          score={user1.score}
          border="1px"
        />

        <User
          opacity={changeUser === true ? "0.4" : "1"}
          src={"/avatar2.png"}
          name={"Player 2"}
          moves={user2.moves}
          score={user2.score}
          border=""
        /> */}
        {/* <User
          opacity={changeUser === 1 ? "0.4" : "1"}
          src={"/avatar2.png"}
          name={"Player 2"}
          moves={user2.moves}
          score={user2.score}
          border=""
        /> */}
      </Flex>
      {/* <Countdown date={Date.now() + time * 60 * 1000} onComplete={TimeOut} />, */}
      <Slider
        aria-label="slider-ex-1"
        defaultValue={time}
        value={time}
        max={time}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
      </Slider>
      <SimpleGrid columns={data.length === 16 ? 4 : 6} spacing={3}>
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
