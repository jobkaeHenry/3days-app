import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HongSiCard, SigButton } from "../Components/GlobalComponents";
import Skeleton from "../Components/Skeleton";
import { dateState } from "../Recoil/atoms/atom";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  MainRightWrapper,
  RowWrapper,
} from "../Components/Wrapper";

const CircleWrapper = styled.div`
  width: 87px;
  height: 87px;
  background-color: var(--main);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
const InnerCircle = styled.div`
  width: 79px;
  height: 79px;
  background-color: var(--main);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pure-white);
  border: 2px solid var(--pure-white);
  font-size: 56px;
  font-weight: bold;
  border-radius: 100%;
`;
const CircleNum = ({ number }) => {
  return (
    <CircleWrapper>
      <InnerCircle>{number}</InnerCircle>
    </CircleWrapper>
  );
};

const Main = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("/hong-si").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  const HowToUseContent = [
    { title: "Sign Up", content: "회원가입 / 로그인" },
    { title: "홍시 Pick", content: "당신의 홍시를 고르세요!" },
    { title: "홍시 수행", content: "목표를 잊지말고 수행해요!" },
    { title: "목표 달성", content: "목표달성! 친구들과 공유해볼까요?" },
  ];
  return !isLoading ? (
    <MainContentContainer>
      
      <MainCenterWrapper>
        <h2 className="bold h2 center">Sign up. Pick. Go!</h2>
        <RowWrapper className="space-between">
          {HowToUseContent.map((e, i) => {
            return (
              <ColumnWrapper className="center align-center">
                <CircleNum key={i} number={i + 1} />
                <h2>{e.title}</h2>
                <p>{e.content}</p>
              </ColumnWrapper>
            );
          })}
        </RowWrapper>
        <Link to="/signup">
          <SigButton>Sign up</SigButton>
        </Link>
        <section>
          {data.map((e) => {
            return <HongSiCard props={e} />;
          })}
        </section>
        <Link to="/board">
          <SigButton>more</SigButton>
        </Link>
      </MainCenterWrapper>

      <MainRightWrapper>오른쪽으로 갈 베이비</MainRightWrapper>
    </MainContentContainer>
  ) : (
    <>"loading"</>
  );
};

export default Main;
