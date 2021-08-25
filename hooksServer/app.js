const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.post("/user/login", (req, res, next) => {

    const {inputEmail, inputNickname} = req.body;

    console.log(inputEmail);
    console.log(inputNickname);

    res.status(200).send("데이터 수신 성공");


});

app.listen(4000, () => {
    console.log("4000 SERVER START");
});

//antd를 사용하여 최대한 ux/ui를 신경써주세요.
//customHook을 사용하여 사용자의 아이디 비번 닉네임 이메일을 받아서
//express서버로 전송한 다음 express서버에서 데이터를 받아서 콘솔로그를 출력하세요