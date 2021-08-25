import { data } from "browserslist";
import { ConsoleWriter } from "istanbul-lib-report";
import { div } from "prelude-ls";
import React, {useState, useEffect, useCallback } from "react";
import { Row, Col,Button } from "antd";
import styled from "styled-components";

const NewRow = styled(Row)`
  height : 400px;
  padding : 10px;  
`;

const NewCol = styled(Col)`
  height : 100% ;
`;

const NewButton = styled(Button)`
  width : 100%;
  height : 100%;
  border-radius : 5px;
`;

const NewImage = styled.img`
  width : 100%;
  height : 100%;
  object-fit : cover;
  border-radius : 5px ;
`;

const App = () => {
  const [imageIdx, setImageIdx] = useState(0);

  const imageList = [
    "https://picsum.photos/1920/500",
    "https://picsum.photos/1920/510",
    "https://picsum.photos/1920/520",
    "https://picsum.photos/1920/530",
    "https://picsum.photos/1920/540",
  ];

  const prevClick = useCallback(() => {
    if(imageIdx === 0) {
      return setImageIdx(imageList.length -1);
    }

    setImageIdx((prev) => prev -1);


  }, [imageIdx]);

  const nextClick = useCallback(()=>{
    if(imageIdx === imageList.length -1){
      return setImageIdx(0);
    }
    setImageIdx((prev)=>prev +1);
  },[imageIdx]);
  
  return (
    <div>
      <NewRow>
        <NewCol xs={24} sm={2}>
          <NewButton type="primary" onClick={prevClick}>PREV</NewButton>
        </NewCol>
        <NewCol xs={24} sm={20}>
          <NewImage src={imageList[imageIdx]} alt={imageList[imageIdx]} />
        </NewCol>
        <NewCol xs={24} sm={2}>
        <NewButton type="primary" onClick={nextClick}>NEXT</NewButton>
        </NewCol>
      </NewRow>
    </div>
  );

};

export default App;