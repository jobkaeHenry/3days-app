import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect,useState } from "react";
import { useRecoilState } from "recoil";
import Skeleton from "../Components/Skeleton";
import { dateState } from "../Recoil/atoms/atom";

const CardUI = styled.div`
  width: 360px;
  height: 180px;
`;
const Main = () => {
  const [date,setDate] = useRecoilState(dateState)
  const [data,setData] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    axios.post("https://www.server.com/hong-si/owning","").then((res)=>{
      console.log(res.data)
      setData(res.data)
      console.log(date)
      setDate(res.data.startDate)
      console.log(date)
      setIsLoading(!isLoading)
    })
  },[])
  return (
    !isLoading?
    <div>
      <CardUI>
        <span>{data.title}</span>
        <span>{data.startDate}</span>
      </CardUI>
    </div>:<>"loading"</>
  );
};

export default Main;
