import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HongSiCard, SigButton } from "../Components/GlobalComponents";
import Skeleton from "../Components/Skeleton";
import { dateState } from "../Recoil/atoms/atom";
import ggachi from "../images/ggachi_side 1.png"
import {
  ColumnCenterWrapper,
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
const Ggachi = styled.img`
position: fixed;

  animation-duration: 500ms;
  animation-name: floating;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  @keyframes floating {

0% {
  bottom: 90px;
  right: 70px;
}

100% {
  bottom: 80px;
  right: 70px;
}
}

`

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
    { title: "목표 달성", content: "달성한 목표를 공유해볼까요?" },
  ];
  return !isLoading ? (
    <MainContentContainer>
      <Ggachi src={ggachi} alt="귀여운 까치이미지" title="까식이"/>
      <MainCenterWrapper>
        <ColumnCenterWrapper className="mt-36">
          <h2 className="bold h2 center">Sign up. Pick. Go!</h2>
          <RowWrapper className="space-between circleNumWrapper mt-16">
            {HowToUseContent.map((e, i) => {
              return (
                <ColumnWrapper key={i} className="center align-center circleNum">
                  <CircleNum number={i + 1} />
                  <h2 className="mt-8 bold">{e.title}</h2>
                  <p className="mt-8">{e.content}</p>
                </ColumnWrapper>
              );
            })}
          </RowWrapper>

          {/* 가입버튼 */}
          <Link to="/signup" className="mt-36">
            <SigButton>Sign up</SigButton>
          </Link>
        </ColumnCenterWrapper>
        {/* 홍시카드 */}
        <ColumnCenterWrapper as={"section"} className="mt-36">
          {data.map((e) => {
            return <HongSiCard props={e} key={`hongsi ${e.hongsi_id} key`}/>;
          })}
          <Link to="/hongsi" className="mt-36">
            <SigButton>더보기</SigButton>
          </Link>
        </ColumnCenterWrapper>
      </MainCenterWrapper>

      <MainRightWrapper>오른쪽으로 갈 베이비</MainRightWrapper>
    </MainContentContainer>
  ) : (
    <>"loading"</>
  );
};

export default Main;
