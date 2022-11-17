import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IconElem, ImageElem, SigTag } from "../../Components/GlobalComponents";
import communityIcon from "../../images/communityIcon.svg";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
} from "../../Components/Wrapper";

const HongsiDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`/hong-si/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  console.log(data);
  return !isLoading && data ? (
    <MainContentContainer>
      <MainCenterWrapper>
        <div className="space-between width100 align-center">
          <h2 className="h4 mb-4 medium">{data.title}</h2>
          <RowWrapper>
            <ColumnWrapper className="align-center mr-16">
              <Link to={`/hongsi-board/${id}`}>
                <IconElem src={communityIcon} width="18"></IconElem>
                <span className="font-gray sub">게시판</span>
              </Link>
            </ColumnWrapper>
            <ColumnWrapper className="align-center">
              <IconElem src={communityIcon} width="18"></IconElem>
              <span className="font-gray sub">공유</span>
            </ColumnWrapper>
          </RowWrapper>
        </div>

        <ImageElem src={data.image} alt={`${data.title}의 대표이미지`} />
        <div className="space-between width100">
          <span className="font-gray">목표일자 : {data.endDate}</span>
          <span className="font-gray">
            <span className="font-main">{data.currentParticipant}</span>/
            {data.maxParticipant} 명 참여중
          </span>
        </div>
        <RowWrapper className="mt-8">
          {data.tags.map((e) => {
            return <SigTag className="ghost mr-4" key={e.hongsi_id}>#{e.tag}</SigTag>;
          })}
        </RowWrapper>
        <p>{data.content}</p>
      </MainCenterWrapper>
    </MainContentContainer>
  ) : (
    <>loading</>
  );
};

export default HongsiDetail;
