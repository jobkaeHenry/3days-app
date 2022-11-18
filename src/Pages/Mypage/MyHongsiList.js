import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ImageElem,
  SigButton,
  HongSiCardWrapper,
} from "../../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  MainRightWrapper,
  RowWrapper,
  MainLeftWrapper,
} from "../../Components/Wrapper";
import ggachi from "../../images/ggachi_front.png";
import { useParams } from "react-router-dom";

const Title = styled.h1`
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Subtitle = styled.h2`
font-size:20px;
margin:15px;
`
const MainContent = styled.div`
  align-items: center;
  height: 100%;
  width: 70%;
`;
const BoardElemWarpper = styled.div`
  padding: 16px;
  margin:8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;
  &:hover{
    box-shadow: 0px 4px 12px rgba(102, 31, 7, 0.3);
    color: var(--main);
  }
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
`;
const CarouselWrapper = styled.div`
  padding: 8px 0;
  width: 90vw;
  max-width: 680px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display:none;
    width:0;
  }
`;
const MyhongsiWarpper = styled.div`
  width: 100%;
  max-width: 628px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
`;
const CWrapper = styled.div`
  padding: 8px 0;
  width: 90vw;
  max-width: 680px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display:none;
    width:0;
  }

`;
const MyHongsiList = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const content = [
    { content: "1" },
    { content: "2" },
    { content: "2" },
    { content: "2" },
    { content: "2" },
    { content: "2" },
    { content: "2" },
    { content: "2" },
  ];
  //console.log(id);

  return (
    <MainContentContainer>
      <MainContent>
        <Title>My page</Title>
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
            <ColumnWrapper>
            <div>
            <Subtitle>내가 만든 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {content.map((e) => {
                  return (
                    <BoardElemWarpper >
                      <ImageElem src={ggachi} style={{margin:'10px'}} />
                      <p>{e.content}</p>
                    </BoardElemWarpper >
                  );
                })}
              </CWrapper>
              
            </RowWrapper>
            </div>
            <div>
            <Subtitle>내가 픽한 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {content.map((e) => {
                  return (
                    <BoardElemWarpper >
                      <ImageElem src={ggachi} />
                      <p>{e.content}</p>
                      </BoardElemWarpper>
                  );
                })}
              </CWrapper>
              
            </RowWrapper>
            </div>
            <div>
            <Subtitle>내가 만든 홍시</Subtitle>
            <RowWrapper>
              <CWrapper>
                {content.map((e) => {
                  return (
                    <BoardElemWarpper>
                      <ImageElem src={ggachi} />
                      <p>{e.content}</p>
                      </BoardElemWarpper>
                  );
                })}
              </CWrapper>
              
            </RowWrapper>
            </div>
            </ColumnWrapper>
          </MainCenterWrapper>
        </RowWrapper>
      </MainContent>
    </MainContentContainer>
  );
};
export default MyHongsiList;
