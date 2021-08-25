import React,{useState} from "react";

const useInput = (initailizeValue) => {
    const [value, setValue] = useState(initailizeValue);

    const onChange = ((e)=>{
        setValue(e.target.value);
    });

    return {value, onChange};
};



export default useInput;
