import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImageElem } from "../Components/GlobalComponents";
//import communityIcon from "../../images/communityIcon.svg";
import styled from "@emotion/styled";
import {  MainContentContainer, MainCenterWrapper, RowWrapper, ColumnWrapper } from "../Components/Wrapper";
const Wrap = styled.div`
    flex-direction: row;
    display:flex;
   width : 80%;
    
`
const Img = styled.img`
    position:absolute;
`

const Boardauth = () =>{
    //const { id } = useParams();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    //console.log(id);
    useEffect(() => {
      axios.get("/hong-si/board").then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    }, []);
    return !isLoading && data ? (
    <MainContentContainer>
        <MainCenterWrapper>
            <Wrap>
            {data.map((e)=>{
            return( 
            <div>
            <ImageElem
            src={e.image}
            //alt={`${title}게시물의 대표이미지`}
            width={174}
            height={174}
            />
            <p>{e.content}</p>
            </div>
            )})}
            </Wrap>
           
        </MainCenterWrapper>
  </MainContentContainer>
    ) : (
        <>loading</>
    );
};
export default Boardauth;