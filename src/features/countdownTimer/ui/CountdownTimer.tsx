import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { calculateTimeRemaining } from "../lib";
  

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>(
    calculateTimeRemaining(targetDate)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  const [date, hour, minute, second] = timeRemaining.split(" ");
  return (
    <Container>
      <Title>Limited time offer</Title>
      <WrapTime>
        <Time>{date}</Time>
        <Time>{hour}</Time>
        <Time>{minute}</Time>
        <Time>{second}</Time>
      </WrapTime>
      <WrapNameTime>
        <NameTime marginLeft={"0px"}>Days</NameTime>
        <NameTime marginLeft={"0px"}>Hours</NameTime>
        <NameTime marginLeft={"0px"}>Mins</NameTime>
        <NameTime marginLeft={"5px"}>Sec</NameTime>
      </WrapNameTime>
    </Container>
  );
};

export default CountdownTimer;

const Container = styled.div`
  position: absolute;
  bottom: 60px;
  left: 60px;
`;

const Title = styled.div`
  color: #1e212c;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const WrapTime = styled.div`
  display: flex;
  gap: 24px;
`;

const Time = styled.div`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const WrapNameTime = styled.div`
  display: flex;
  gap: 24px;
`;

const NameTime = styled.div<{ marginLeft: string }>`
  color: #1e212c;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  padding-left: ${(props) => props.marginLeft};
`;
