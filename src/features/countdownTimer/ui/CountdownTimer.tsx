import React, { useState, useEffect } from "react";
import styled from "styled-components";

const formatNumberWithLeadingZero = (number: number) => {
  return number < 10 ? `0${number}` : `${number}`;
};
const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${formatNumberWithLeadingZero(days)} ${formatNumberWithLeadingZero(
      hours
    )} ${formatNumberWithLeadingZero(minutes)} ${formatNumberWithLeadingZero(
      seconds
    )}`;
  };
  const [timeRemaining, setTimeRemaining] = useState<string>(
    calculateTimeRemaining()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
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
