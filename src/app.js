

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import pool from "../db/connectionPool";
import cors from "cors";

const app = express();
app.use(morgan(`dev`));
app.use(cors());

app.get("/api/empList", async(req, res) => {

    let sqlQuery = `
    SELECT  A.EMPNO,
            A.ENAME,
            A.HIREDATE,
            B.DNAME,
            B.LOC
      FROM  EMP   A
     INNER
      JOIN  DEPT  B
        ON  A.DEPTNO = B.DEPTNO
    `;

    const resultGrid = await pool.query(sqlQuery);
    const empData = resultGrid[0];

    console.log(empData);
    
    return res.json(empData);
});


app.listen(7000, ()=>{
    console.log("7000 PORT WEBSERVER START!");
});




