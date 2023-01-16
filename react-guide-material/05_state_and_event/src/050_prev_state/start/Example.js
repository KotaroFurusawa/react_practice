import { useState } from "react";

const Example = () => {
    const [count,setCount]=useState(0)
    const countUp = () => {
        setCount(count+1);//カウントの変更を予約しているだけで，変更されるのは、再レンダリングされた後。
    };
    const countDown = () => {
        setCount(count-1);
    };
    return(
        <>
            <p>現在のカウント数:{count}</p>
            <button onClick={countUp}></button>
            <button onClick={countDown}></button>
        </>
    )
};

export default Example;
