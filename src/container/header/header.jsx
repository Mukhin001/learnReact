import st from './header.module.css';

import List from './list/list.jsx';
import ShowImg from './showImg/showImg.jsx';
import Input from './input/input.jsx';

import { useState } from 'react';


const Header = () => {

    const [imgState, setImgState] = useState({ name: '', imgSrc: "images/all/dark-theme.jpg"});

    const handleChange = (value, value2) => {
        
        setImgState({name: value, imgSrc: value2});
      };


    return (
        <header className={st.header}>I am Header!
            <List onClickLi={handleChange}/>
            <ShowImg propsImg={imgState}/>
            <Input/>
        </header>
    );
};

export default Header;