import React, {useState, useCallback } from "react";
import { Form } from "antd";
import useInput from "./hooks/useInput";
import axios from "axios";


const App = () => {

  const email = useInput(``);
  const nickname = useInput(``);
  
  const onSubmit = useCallback(async () => {

    try {
      const result = await axios.post("http://localhost:4000/user/login", {
        inputEmail : email.value,
        inputNickname : nickname.value
      });
  
      console.log(result.data);
      alert(result.data);
    } catch(error) {
      console.error(error);
      alert("데이터 통신에 실패했습니다")
    }

    
  },[email, nickname]);


  return (
  <div>
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="inputEmail">email</label>
        <input type="email" name="inputEmail" id="inputEmail" {...email} />
      </div>

      <div>
        <label htmlFor="inputNickname">nickname</label>
        <input type="text" name="inputNickname" id="inputNickname" {...nickname} />
      </div>
      <input type="submit" value="send" />
    </Form>

    
  </div>
  );
};





export default App;

