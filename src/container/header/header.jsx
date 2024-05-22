import st from './header.module.css';

import Input from './input/input.jsx';

const Header = () => {
    return (
        <header className={st.header}>I am Header!
            <Input/>
        </header>
    );
};

export default Header;