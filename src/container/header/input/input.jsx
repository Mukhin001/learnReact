import { useRef, useState } from "react";

import ShowInputText from './showInputText/showInputText.jsx';

const Input = () => {
    const [inputText, setInput] = useState('empty input');
    let inputRef = useRef();
       
    return (
        <div className="wrapperInput">
            <input type="text" ref={inputRef}/>
            <button
                onClick={() => { 
                    setInput(inputRef.current.value);
                    inputRef.current.value = '';
                }}
            >send</button>
            {/* <p>
                {inputText}
            </p> */}
            <ShowInputText propsText={inputText}/>
        </div>
    );
};

export default Input;
