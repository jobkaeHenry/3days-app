import styled from "@emotion/styled";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


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

const Write = () => {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });
  const getContent = (event) => {
    setContent(event.target.value);
  };
  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    })
  };
  return (
    <MainContentContainer>
      <MainCenterWrapper>
        <ColumnWrapper>
        <input 
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
          <CKEditor
            editor={ClassicEditor}
            style={{height: '300'}}
            data="<p>Hello from CKEditor 5!</p>"

            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({event, editor,data});
              setContent({
                ...content,
                content:data
              })
            }}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            
          />
          <Box1></Box1>
  
        </ColumnWrapper>
      </MainCenterWrapper>
    </MainContentContainer>
  );
};
export default Write;
