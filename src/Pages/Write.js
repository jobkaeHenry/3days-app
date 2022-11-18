import styled from "@emotion/styled";
import "../index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SigButton } from "../Components/GlobalComponents";
import {
  ColumnWrapper,
  MainCenterWrapper,
  MainContentContainer,
  RowWrapper,
} from "../Components/Wrapper";

const Wrap = styled.div`
  /* flex-direction: row; */
  display: flex;
  flex-flow: row wrap;
  /* width: 80%; */
`;
const Box1 = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Input = styled.input`
  outline: none;
  width: 15vw;
  height: 30vw;
  position: fixed;
  margin-left: 10vw;
  margin-bottom: 2vw;
  border: none;

  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  resize: none;
  padding: 1vw;
  letter-spacing: 0.1vw; //글자 간격
  line-height: 2vw; // 줄 간격
  background-color: inherit;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-top: 8px;
`;
const CATEGORY_LIST = [
    {id:0, data:'운동'},
    {id:1, data:'패션'},
    {id:2, data:'스터디'},
    {id:3, data:'일상'},
];

const Checkbox = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0;
  margin-right: 1vw;
  &:checked {
    border-color: transparent;
    background-color: limegreen;
  }
`;
const AlbumCheck = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5%;
`;
const Write = () => {

    const [checkedList, setCheckedList] = useState([]);
    // 1️⃣ onChange함수를 사용하여 이벤트 감지, 필요한 값 받아오기
    const onCheckedElement = (checked, item) => {
      if (checked) {
        setCheckedList([...checkedList, item]);
        console.log(checkedList);
      } else if (!checked) {
        setCheckedList(checkedList.filter(el => el !== item));
      }
    };


  const [content, setContent] = useState({
    img: "",
    content: "",
  });
  const getContent = (event) => {
    setContent(event.target.value);
  };
  const getValue = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };
  return (
    <MainContentContainer>
      <MainCenterWrapper>
        <ColumnWrapper>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="제목"
              onChange={getValue}
              name="title"
              style={{ width: "100%" }}
            />
            <CKEditor
              editor={ClassicEditor}
              data="<p>함께하고 싶은 목표에 대해 설명해주세요!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setContent({
                  ...content,
                  content: data,
                });
              }}
            />
          </div>
          <AlbumCheck>
            {CATEGORY_LIST.map((item)=>(
                <div>
                <Checkbox
                type='checkbox'
                value={item.data}
                onChange={e=>{
                    onCheckedElement(e.target.checked,e.target.value);
                }}
                />
                 <label>{item.data}</label>   
                 </div>
                    
                            ))}
                            </AlbumCheck>

          <SigButton
            style={{
              width: "20%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            저장
          </SigButton>
        </ColumnWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  );
};
export default Write;
