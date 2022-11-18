import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ImageElem, SigButton } from "../../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
  MainLeftWrapper,
} from "../../Components/Wrapper";
import ggachi from "../../images/ggachi_front.png";
import { userState } from "../../Recoil/atoms/atom";

const CheckListButton = styled.div`
  width: 100%;
  padding: 16px;
  background-color: var(--main);
  text-align: center;
  color: var(--pure-white);
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--pure-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border: 2px solid var(--bg-gray);
  border-radius: 10px;
  overflow: hidden;
`;
const CounterWrapper = styled.div`
  max-width: 360px;
`;
const CardContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--line-light-gray);
  border-radius: 20px;
`;
const Content = [
  { title: "내가 만든" },
  { title: "내가 픽한" },
  { title: "내가 완료한" },
];
const Card = [{ content: "#미라클모닝" }, { content: "#오운완" }];

// ===================================컴포넌트 시작 ===========================//
const Mypage = () => {
  const userNickName =useRecoilValue(userState)

  return (
    <MainContentContainer>
      {/* 프사공간 */}
      <MainLeftWrapper>
        <ImageElem src={ggachi} width={50} height={50} circle={true} />
        <h2></h2>
      </MainLeftWrapper>

      <MainCenterWrapper>
        <p className="mt-8 bold">나의 홍시</p>
        <Container className="mt-16 mb-16">
          {/* 숫자카운터 (내가 만든, 내가 픽한, 내가 완료한) */}
          <CounterWrapper className="mb-16 space-between width100 pl-16 pr-16">
            {Content.map((e, i) => {
              return (
                <ColumnWrapper
                  key={i}
                  className="center align-center mt-16 mb-16"
                >
                  <span className="mt-8 bold">{e.title}</span>
                  <p className="mt-8">{Content.length}</p>
                </ColumnWrapper>
              );
            })}
          </CounterWrapper>
          {/* 버튼 */}
          <CheckListButton>
            <Link to={"/"}>목록 확인하기</Link>
          </CheckListButton>
        </Container>
        {/* 카드 */}
        <p className="mt-16 bold">달성카드</p>
        {/* 카드맵 */}
        <RowWrapper>
          {Card.map((e, i) => {
            return (
              <CardContainer
                key={`오운완 ${e.hongsi_id}`}
                className={"mt-16 mr-8"}
              >
                {e.content}
              </CardContainer>
            );
          })}
        </RowWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  );
};
export default Mypage;
