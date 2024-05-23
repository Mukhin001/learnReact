import st from './header.module.css';

import List from './list/list.jsx';
import ShowImg from './showImg/showImg.jsx';
import Input from './input/input.jsx';

const Header = () => {
    return (
        <header className={st.header}>I am Header!
            <List/>
            <ShowImg/>
            <Input/>
        </header>
    );
};

export default Header;