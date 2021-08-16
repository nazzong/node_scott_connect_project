import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import pool from "../db/connectionPool";

const app = express();
app.use(morgan(`dev`));

app.get("/", async(req, res) => {

    let sqlQuery = `
    SELECT  A.ENAME
            A.HIREDATE
            B.DNAME
            B.LOC
      FROM  EMP   A
     INNER
      JOIN  DEPT  B
        ON  A.DEPTNO = B.DEPTNO
    `;

    const resultGrid = await pool.query(sqlQuery);

    const empData = resultGrid[0];

    let empTag = "";
    Promise.all(
        empData.map((e) => {
            empTag =
                empTag +
                `<ul>
                    <li>${e.ENAME}</li>
                    <li>${e.HIREDATE}</li>
                    <li>${e.DNAME}</li>
                    <li>${e.LOC}</li>
                </ul><br /><hr /><br />`;
        })
    );

    res.send(`<div>${empTag}</div>`);
});


app.listen(3000, ()=>{
    console.log("3000 PORT WEBSERVER START!");
});



//뉴프로젝트 만들고 "/"신호 받았을때, 화면에 직원이름과, 입사일, 부서명, 근무지역을 보여주세요
//화면형태는 상관없음, pool 을 사용하여 디비에 접속


