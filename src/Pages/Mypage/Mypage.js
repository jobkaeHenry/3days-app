import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageElem, SigButton } from "../../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  MainRightWrapper,
  RowWrapper,
  MainLeftWrapper,
} from "../../Components/Wrapper";
import ggachi from "../../images/ggachi_front.png";
const Title = styled.h1`
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MainContent = styled.div`
  align-items: center;
  height: 100%;
  width: 70%;
`;
const Container = styled.div`
      width: 80%;
      height: 70px;
  display: flex;
 
  justify-content: center;

  align-items: center;
  background-color: #f1f2f3;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 10px;
`
const CardContainer = styled.div`
width:100px;
height:30px;
margin: 30px 10px;

display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--line-light-gray);
border-radius: 20px;
`
const Mypage = () => {
    const navigate = useNavigate();
    const navigateToMyHonsi = () =>{
        navigate("/");
    }
  const Content = [
    { title: "내가 만든" },
    { title: "내가 픽한" },
    { title: "내가 완료한" },
  ];
  const Card = [
    {content:"#미라클모닝"},
    {content:"#오운완"}
  ]
  return (
    <MainContentContainer>
      <MainContent>
        <Title>MY PAGE</Title>
        <RowWrapper>
          <MainLeftWrapper>
            <ImageElem
              src={ggachi}
              width={50}
              height={50}
              style={{ margin: "auto" }}
              circle={true}
            />
          </MainLeftWrapper>
          <MainCenterWrapper>
            <p className="mt-8 medium">나의 홍시</p>

            <RowWrapper className="space-between circleNumWrapper mt-16">
              <Container>
                {Content.map((e, i) => {
                  return (
                    <ColumnWrapper
                      key={i}
                      className="center align-center circleNum"
                    >
                      <h2 className="mt-8 bold">{e.title}</h2>
                    </ColumnWrapper>
                  );
                })}
               </Container>
              
              <SigButton onClick={navigateToMyHonsi}style={{width:'80%',borderRadius:'10px'}}>목록 확인하기</SigButton>
              

            </RowWrapper>
            <p className="mt-8 medium">달성카드</p>
            <RowWrapper>
            {Card.map((e, i) => {
                
                  return (
                   <CardContainer>
                      <h2 className="mt-8 bold">{e.content}</h2>
                      </CardContainer>
                  );
                 
                })}
                   </RowWrapper>
          </MainCenterWrapper>
        </RowWrapper>
      </MainContent>
    </MainContentContainer>
  );
};
export default Mypage;
