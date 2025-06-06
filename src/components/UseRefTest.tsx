import { useRef } from "react";

export function UseRefTest() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className={'exampleContainer'}>
            <input className={'exampleInput'} ref={inputRef} value={'텍스트'} />
            <button
                style={{
                    marginLeft: 5
                }}
                className={'exampleButton'}
                onClick={handleClick}
            >
                인풋에 포커스
            </button>
        </div>
    );
}

export function UseRefTest2() {
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current += 1;
        console.log(countRef.current); // 값은 변하지만 컴포넌트는 리렌더링되지 않음
    };

    return (
        <div className={'exampleContainer'}>
            <button
                style={{
                    marginLeft: 5
                }}
                className={'exampleButton'}
                onClick={handleClick}
            >
                값 증가 ( 값 : {countRef.current} )
            </button>
        </div>
    );
}