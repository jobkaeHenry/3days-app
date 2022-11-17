
import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageElem } from "../Components/GlobalComponents";
import {  MainContentContainer} from "../Components/Wrapper";
import ggachi from "../images/ggachi_front.png"
const MainCenterWrapper = styled.div`
display: absolute;
flex-direction: column;
width: 150px;
height:250px;
min-width: 312px;
max-width: 730px;
padding: 230px 170px;
background-color: var(--pure-white);
margin-top:30px;
@media screen and (max-width: 1024px) {
  margin-bottom: 156px;
}
`
const MainRightWrapper = styled.aside`
min-width: 298px;
display: flex;
height:300px;
margin-right: 50px;
margin-left:50px;
flex-direction: column;
padding: 230px 170px;
background-color: var(--pure-white);


@media screen and (max-width: 1024px) {
  margin-left: 0;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 52px;
  align-items: center;
  border-top: 1px solid var(--line-light-gray);
}
`
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const ProfileWrapper = styled.div`
position:relative;
margin-bottom:100px;
width: 30px;
height: 30px;
`
const Mypage = () => {

    return (
        <MainContentContainer>
            <MainCenterWrapper>
                <ProfileWrapper>
                        <ImageElem 
                        src={ggachi}
                        width={50}
                        height={50}/>
                </ProfileWrapper>
            </MainCenterWrapper>
            <MainRightWrapper>

            </MainRightWrapper>
        </MainContentContainer>
    )
}
export default Mypage;