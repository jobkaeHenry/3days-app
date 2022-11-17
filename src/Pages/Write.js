import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MainCenterWrapper, MainContentContainer, RowWrapper } from "../Components/Wrapper";
const Wrap = styled.div`
  /* flex-direction: row; */
  display: flex;
  flex-flow: row wrap;
  /* width: 80%; */
`;
const Box1 = styled.div`
    display:flex;
flex-flow: row wrap;
`
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
  margin-top:8px;
`;

const Write = ()=>{
    const [content, setContent] = useState({
        title:'',
        content:''
    });
  const getContent = (event) => {
    setContent(event.target.value);
  };
    return(
        <MainContentContainer>
            <MainCenterWrapper>
                <RowWrapper>
                <Box1></Box1>
                <div>
                    <Label >제목</Label>
                    
                    <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor)=>{
            const data = editor.getData();
            console.log(data);
          }}/>
         
       
                <Input
            placeholder="입력하세요"
            type="text"
            contentEditable
            value={content}
            onChange={getContent}
          />
          </div>
                </RowWrapper>
            </MainCenterWrapper>
        </MainContentContainer>
    )
}
export default Write;