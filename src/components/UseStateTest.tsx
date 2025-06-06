import { useState } from 'react';

export const UseStateTest = () => {
    const [count, setCount] = useState(0); // 상태 선언

    const handleClick = () => {
        setCount(count + 1); // 상태 변경 -> 리렌더링 발생
    };

    return (
        <div className={'exampleContainer'}>
            <span>현재 카운트: {count}</span>&nbsp;&nbsp;
            <button
                className={'exampleButton'}
                onClick={handleClick}>+1 증가</button>
        </div>
    );
}
