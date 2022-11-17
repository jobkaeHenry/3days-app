
import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageElem } from "../Components/GlobalComponents";
import { MainCenterWrapper, MainContentContainer, MainRightWrapper} from "../Components/Wrapper";
import ggachi from "../images/ggachi_front.png"
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
const Profile = () => {

    return (
        <MainContentContainer>
            <MainCenterWrapper>
                <ProfileWrapper>
                        <ImageElem 
                        src={ggachi}
                        width={50}
                        height={50}
                        circle={true}/>
                </ProfileWrapper>
            </MainCenterWrapper>
            <MainRightWrapper>

            </MainRightWrapper>
        </MainContentContainer>
    )
}
export default Profile;