import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HongSiCard, SigButton } from '../../Components/GlobalComponents';
import { ColumnCenterWrapper, MainCenterWrapper, MainContentContainer, MainRightWrapper } from '../../Components/Wrapper';

const HongsiList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`/hong-si`).then((res) => {
      setData(res.data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return !isLoading && data ? (
    <MainContentContainer>
      <MainCenterWrapper>
      <ColumnCenterWrapper as={"section"} className={"mt-36 justify-center-mobile"}>
          {data.map((e,i) => {
            return <HongSiCard props={e} key={e.hongsi_id}/>;
          })}
        </ColumnCenterWrapper>
      </MainCenterWrapper>
      <MainRightWrapper>
        
      </MainRightWrapper>
    </MainContentContainer>
  ):<>loading</>
}

export default HongsiList