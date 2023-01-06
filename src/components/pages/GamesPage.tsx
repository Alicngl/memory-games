import {
  Flex,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { GAME6, GAME4 } from "../../constants";
import CardComponent from "../shared/CardComponent";
import User from "../shared/User";
import Countdown from "react-countdown";

function GamesPage() {
  const [data, setData] = useState(GAME6.sort(() => Math.random() - 0.5));
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const [user1, setUser1] = useState({ moves: 0, score: 0 });
  const [user2, setUser2] = useState({ moves: 0, score: 0 });
  const [changeUser, setChangeUser] = useState(true);
  const [time, setTime] = useState(1);

  const checkData = (current) => {
    if (data[current].id === data[previousCardState].id) {
      data[current].status = "active";
      data[previousCardState].status = "active";
      setPreviousCardState(-1);
      if (changeUser === true) {
        setUser1({
          ...user1,
          ["moves"]: user1.moves + 1,
          ["score"]: user1.score + 1,
        });
        setChangeUser(!changeUser);
      } else {
        setUser2({
          ...user2,
          ["moves"]: user2.moves + 1,
          ["score"]: user2.score + 1,
        });
        setChangeUser(!changeUser);
      }
    } else {
      if (changeUser === true) {
        setUser1({
          ...user1,
          ["moves"]: user1.moves + 1,
          ["score"]: user1.score,
        });
        setChangeUser(!changeUser);
      } else {
        setUser2({
          ...user2,
          ["moves"]: user2.moves + 1,
          ["score"]: user2.score,
        });
        setChangeUser(!changeUser);
      }
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
        <User
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
        />
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
      <SimpleGrid columns={data === GAME4 ? 4 : 6} spacing={3}>
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
